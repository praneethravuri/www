import assert from "node:assert/strict";
import { execFile, spawn } from "node:child_process";
import { promisify } from "node:util";
import { setTimeout } from "node:timers/promises";

const deployment = process.env.AGENT_TEST_DEPLOYMENT;
const origin = deployment || process.env.AGENT_TEST_ORIGIN || "http://127.0.0.1:3102";
const server =
  deployment || process.env.AGENT_TEST_ORIGIN
    ? null
    : spawn(
        process.execPath,
        ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", "3102"],
        { stdio: "ignore" }
      );
const request = async (path, accept, method = "GET") => {
  if (!deployment)
    return fetch(`${origin}${path}`, { method, headers: accept ? { Accept: accept } : {} });
  // Vercel CLI authenticates protected previews without exposing bypass tokens.
  const args = [
    "curl",
    path,
    "--deployment",
    deployment,
    "--",
    "--silent",
    "--show-error",
    "--include",
  ];
  if (accept) args.push("--header", `Accept: ${accept}`);
  if (method === "HEAD") args.push("--head");
  const { stdout } = await promisify(execFile)("vercel", args, {
    encoding: "buffer",
    maxBuffer: 12 * 1024 * 1024,
  });
  const end = stdout.indexOf("\r\n\r\n");
  assert.ok(end >= 0, "Vercel curl must return HTTP headers");
  const lines = stdout.subarray(0, end).toString().split("\r\n");
  const status = Number(lines.shift().match(/^HTTP\/[\d.]+ (\d+)/)[1]);
  const headers = new Headers();
  for (const line of lines) {
    const colon = line.indexOf(":");
    if (colon > 0) headers.append(line.slice(0, colon), line.slice(colon + 1).trim());
  }
  return new Response(method === "HEAD" ? null : stdout.subarray(end + 4), { status, headers });
};
const vary = (response) => {
  const tokens = response.headers.get("vary")?.toLowerCase().split(/,\s*/) || [];
  assert.ok(tokens.includes("accept"), "Negotiated responses must vary on Accept");
  assert.ok(tokens.includes("accept-encoding"));
};
const markdownMetadata = (body, response, canonical) => {
  const block = body.match(/^---\n([\s\S]*?)\n---\n\n# /)?.[1];
  assert.ok(block, "Successful Markdown documents must include YAML frontmatter");
  const fields = Object.fromEntries(
    block.split("\n").map((line) => {
      const colon = line.indexOf(": ");
      return [line.slice(0, colon), JSON.parse(line.slice(colon + 2))];
    })
  );
  assert.deepEqual(Object.keys(fields), ["title", "description", "canonical", "last-updated"]);
  assert.ok(fields.title.length > 0 && fields.description.length > 0);
  assert.equal(fields.canonical, canonical);
  assert.match(fields["last-updated"], /^\d{4}-\d{2}-\d{2}$/);
  assert.ok(response.headers.get("link")?.includes(`<${canonical}>; rel="canonical"`));
};
try {
  for (let i = 0; i < 100; i++) {
    try {
      await request("/");
      break;
    } catch {
      if (i === 99) throw new Error("Production server did not start");
      await setTimeout(100);
    }
  }
  // Detect ignored q-values, wildcard overrides of explicit rejection, and HTML/Markdown cache mixing.
  for (const [accept, type, status] of [
    ["text/markdown", "text/markdown", 200],
    ["text/html", "text/html", 200],
    ["text/markdown;q=0.2, text/html;q=0.9", "text/html", 200],
    ["text/html;q=0.2, text/markdown;q=0.9", "text/markdown", 200],
    ["text/markdown;q=0, */*;q=1", "text/html", 200],
    ["text/html;q=0, */*;q=1", "text/markdown", 200],
    ["text/markdown, text/html", "text/markdown", 200],
    ["text/*", "text/html", 200],
    ["*/*", "text/html", 200],
    ["application/json", "text/plain", 406],
    ["text/html;q=0, text/markdown;q=0", "text/plain", 406],
  ]) {
    const response = await request("/", accept);
    assert.equal(response.status, status, accept);
    assert.ok(response.headers.get("content-type")?.startsWith(type), accept);
    vary(response);
    const body = await response.text();
    if (type === "text/markdown") {
      markdownMetadata(body, response, "https://praneethravuri.com");
      // Vercel adds noindex to branch previews; production negotiated URLs stay indexable.
      assert.equal(response.headers.get("x-robots-tag"), deployment ? "noindex" : null);
      assert.match(body, /\n# Praneeth Ravuri\n/);
      assert.ok(body.includes("## Experience"));
      assert.doesNotMatch(body, /<html|<script/);
    } else if (type === "text/html") assert.match(body, /<h1\b/);
  }
  const head = await request("/", "text/markdown", "HEAD");
  assert.equal(head.status, 200);
  assert.match(head.headers.get("content-type"), /^text\/markdown/);
  assert.ok(head.headers.get("link")?.includes('<https://praneethravuri.com>; rel="canonical"'));
  vary(head);
  assert.equal(await head.text(), "");
  for (const path of [
    "/__agent-test-missing",
    "/nested/missing",
    "/.well-known/mcp.json",
    "/constructor",
  ]) {
    for (const accept of ["text/markdown", "text/html"]) {
      const response = await request(path, accept);
      assert.equal(response.status, 404, path);
      vary(response);
      const body = await response.text();
      assert.ok(body.includes("/llms.txt") && body.includes("/sitemap.xml"));
      if (accept === "text/markdown") {
        assert.match(response.headers.get("content-type"), /^text\/markdown/);
        assert.match(body, /^# 404/);
        assert.doesNotMatch(response.headers.get("link") || "", /rel="canonical"/);
        assert.equal(response.headers.get("cache-control"), "no-store");
      }
    }
  }
  const sitePaths = ["about", "contact", "privacy", "projects", "agent-instructions"];
  assert.equal((await request("/__agent-test-missing", "application/json")).status, 404);
  for (const path of sitePaths) {
    const response = await request(`/${path}`, "text/html");
    assert.equal(response.status, 200, path);
    vary(response);
    const html = await response.text();
    assert.ok(html.includes(`rel="canonical" href="https://praneethravuri.com/${path}"`));
    assert.ok(html.includes(`/${path}/index.md`));
    assert.equal((html.match(/<h1\b/g) || []).length, 1);
    const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1];
    assert.ok(main && main.replace(/<[^>]*>/g, "").length >= 500, path);
    const md = await request(`/${path}`, "text/markdown");
    assert.equal(md.status, 200);
    assert.match(md.headers.get("content-type"), /^text\/markdown/);
    vary(md);
    const body = await md.text();
    markdownMetadata(body, md, `https://praneethravuri.com/${path}`);
    assert.equal(md.headers.get("x-robots-tag"), null);
    const explicit = await request(`/${path}/index.md`, "text/html");
    assert.equal(explicit.status, 200);
    assert.match(explicit.headers.get("content-type"), /^text\/markdown/);
    assert.equal(await explicit.text(), body);
    markdownMetadata(body, explicit, `https://praneethravuri.com/${path}`);
    assert.equal(explicit.headers.get("x-robots-tag"), "noindex");
  }
  const llmsResponse = await request("/llms.txt");
  assert.equal(llmsResponse.status, 200);
  assert.match(llmsResponse.headers.get("content-type"), /^text\/plain/);
  const llms = await llmsResponse.text();
  assert.match(llms, /^# Praneeth Ravuri\n\n> /);
  assert.ok(llms.includes("## When to use this"));
  assert.ok(llms.includes("https://praneethravuri.com/projects/index.md"));
  assert.ok(llms.includes("[Portfolio source code](https://github.com/praneethravuri/www)"));
  assert.ok(llms.includes("https://github.com/praneethravuri/www/blob/main/AGENTS.md"));
  assert.ok(
    llms.includes("[praneethravuri developer resources](https://praneethravuri.com/projects)")
  );
  const resources = await (await request("/projects", "text/html")).text();
  assert.match(
    resources,
    /<title>Praneeth Ravuri \(praneethravuri\) [^<]*developer resources<\/title>/
  );
  assert.match(resources, /<h1\b[^>]*>Praneeth Ravuri \(praneethravuri\)/);
  const resourceMarkdown = await (await request("/projects", "text/markdown")).text();
  assert.match(resourceMarkdown, /\n# Praneeth Ravuri \(praneethravuri\)/);
  // H2 sections in llms.txt v2 are link lists, not arbitrary prose sections.
  for (const section of llms.split(/^## /m).slice(1)) {
    assert.match(section, /\n\n- \[[^\]]+\]\([^)]+\)/);
  }
  const instructions = await (await request("/agent-instructions", "text/markdown")).text();
  assert.ok(
    instructions.includes("security investigation") &&
      instructions.includes("Tether") &&
      instructions.includes("Pitstop")
  );
  assert.ok(instructions.includes("mailto:ravpraneeth@gmail.com"));
  const explicitPortfolio = await request("/index.md");
  markdownMetadata(await explicitPortfolio.text(), explicitPortfolio, "https://praneethravuri.com");
  assert.equal(explicitPortfolio.headers.get("x-robots-tag"), "noindex");
  const home = await (await request("/", "text/html")).text();
  const graph = JSON.parse(
    home.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]
  )["@graph"];
  const person = graph.find((entry) => entry["@type"] === "Person");
  assert.equal(person.alternateName, "praneethravuri");
  assert.equal(graph.find((entry) => entry["@type"] === "WebSite").alternateName, "praneethravuri");
  assert.equal(person.contactPoint.email, "ravpraneeth@gmail.com");
  assert.equal(person.address.addressLocality, "Chicago");
  assert.equal(person.address.addressCountry, "US");
  assert.equal(
    graph.find((entry) => entry["@type"] === "WebSite").publisher["@id"],
    "https://praneethravuri.com#person"
  );
  for (const path of [
    "/index.md",
    "/robots.txt",
    "/sitemap.xml",
    "/manifest.webmanifest",
    "/opengraph-image",
    "/twitter-image",
    "/favicon.ico",
    "/icons/favicon-16x16.png",
    "/icons/favicon-32x32.png",
    "/icons/apple-touch-icon.png",
    "/icons/android-chrome-192x192.png",
    "/icons/android-chrome-512x512.png",
  ]) {
    const response = await request(path);
    assert.equal(response.status, 200, path);
    assert.ok((await response.arrayBuffer()).byteLength > 0, path);
  }
  const sitemap = await (await request("/sitemap.xml")).text();
  for (const path of sitePaths)
    assert.ok(sitemap.includes(`<loc>https://praneethravuri.com/${path}</loc>`));
  assert.ok(!sitemap.includes("index.md"));
  assert.ok(
    (await (await request("/robots.txt")).text()).includes(
      "Sitemap: https://praneethravuri.com/sitemap.xml"
    )
  );
  console.log(
    `PASS: agent negotiation, q-values, 406, HEAD, 404 recovery, trust pages, discovery, schema, sitemap, and public files (${origin})`
  );
} finally {
  server?.kill("SIGTERM");
}
