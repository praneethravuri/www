import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (file) => readFileSync(`.next/server/app/${file}`, "utf8");
const html = read("index.html");
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
