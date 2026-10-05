import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (file) => readFileSync(`.next/server/app/${file}`, "utf8");
const frontmatter = (body, canonical) => {
  const block = body.match(/^---\n([\s\S]*?)\n---\n\n# /)?.[1];
  assert.ok(block, "Markdown documents must have YAML frontmatter before their H1");
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
  return fields;
};
const html = read("index.html");
const routing = JSON.parse(readFileSync(".next/routes-manifest.json", "utf8"));
for (const header of ["accept", "accept-encoding"]) {
  assert.ok(
    routing.rsc.varyHeader.toLowerCase().split(/,\s*/).includes(header),
    "Vercel static delivery must preserve HTML/Markdown cache variation"
  );
}
const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
assert.equal(canonical, "https://praneethravuri.com");
assert.equal((html.match(/<h1\b/g) || []).length, 1);
assert.match(html, /rel="alternate"[^>]*type="text\/markdown"/);
assert.match(html, /rel="describedby"[^>]*href="\/llms.txt"/);
assert.doesNotMatch(html, /document\/d\/1Ue\.\.\./);
const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
assert.ok(description && description.length <= 170);
const json = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
assert.ok(json, "Structured data must be present in server-rendered HTML");
const graph = JSON.parse(json)["@graph"];
const person = graph.find((entry) => entry["@type"] === "Person");
const website = graph.find((entry) => entry["@type"] === "WebSite");
assert.equal(person.name, "Praneeth Ravuri");
assert.equal(person.alternateName, "praneethravuri");
assert.equal(website.name, "Praneeth Ravuri");
assert.equal(website.alternateName, "praneethravuri");
assert.equal(website.publisher["@id"], `${canonical}#person`);
const profile = graph.filter((entry) => entry["@type"] === "ProfilePage");
assert.equal(profile.length, 1);
assert.equal(profile[0].mainEntity["@id"], `${canonical}#person`);
const projects = graph.filter((entry) => entry["@type"] === "SoftwareSourceCode");
assert.equal(projects.length, 5);
for (const project of projects) {
  assert.ok(
    project.programmingLanguage.every((language) =>
      ["Go", "Python", "TypeScript"].includes(language)
    )
  );
}
const llms = read("llms.txt.body");
const markdown = read("index.md.body");
assert.match(llms, /^# Praneeth Ravuri\n\n> /);
assert.ok(llms.includes(`${canonical}/index.md`));
assert.ok(llms.includes(`${canonical}/projects/index.md`));
assert.ok(llms.includes("[Portfolio source code](https://github.com/praneethravuri/www)"));
assert.ok(llms.includes("https://github.com/praneethravuri/www/blob/main/AGENTS.md"));
const portfolioFields = frontmatter(markdown, canonical);
assert.equal(portfolioFields.description, description);
for (const path of ["about", "contact", "privacy", "projects", "agent-instructions"]) {
  const document = read(`${path}/index.md.body`);
  const fields = frontmatter(document, `${canonical}/${path}`);
  assert.ok(document.includes(`\n# ${fields.title}\n`));
  assert.equal(fields["last-updated"], portfolioFields["last-updated"]);
}
assert.match(
  llms,
  /\[praneethravuri developer resources\]\(https:\/\/praneethravuri\.com\/projects\)/
);
const resources = read("projects.html");
assert.match(
  resources,
  /<title>Praneeth Ravuri \(praneethravuri\) [^<]*developer resources<\/title>/
);
assert.match(resources, /<meta name="description" content="[^"]*praneethravuri[^\"]*"/);
assert.match(resources, /<h1\b[^>]*>Praneeth Ravuri \(praneethravuri\)/);
assert.match(resources, /rel="canonical" href="https:\/\/praneethravuri\.com\/projects"/);
assert.ok(read("projects/index.md.body").includes("Praneeth Ravuri (praneethravuri)"));
for (const project of projects) {
  assert.ok(resources.includes(project.name));
  assert.ok(resources.includes(`${project.codeRepository}#readme`));
}
assert.doesNotMatch(llms + markdown, /1Ue\.\.\.|Hybrid Search|Outputs PDF/);
for (const section of ["Experience", "Projects", "Education", "Skills"]) {
  assert.ok(markdown.includes(`## ${section}`));
}
for (const project of projects) assert.ok(markdown.includes(project.codeRepository));
const sitemap = read("sitemap.xml.body");
assert.ok(sitemap.includes(`<loc>${canonical}</loc>`));
assert.ok(read("robots.txt.body").includes(`${canonical}/sitemap.xml`));
console.log(
  "PASS: server-rendered metadata, structured data, Markdown, llms.txt, sitemap, and robots"
);
