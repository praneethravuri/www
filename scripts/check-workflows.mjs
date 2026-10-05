import assert from "node:assert/strict";
import { readFileSync, readdirSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

for (const file of readdirSync(".github/workflows")) {
  const workflow = readFileSync(`.github/workflows/${file}`, "utf8");
  for (const action of workflow.matchAll(/\buses:\s+(\S+)/g)) {
    assert.match(action[1], /@[a-f0-9]{40}$/, `${file}: immutable action pin required`);
  }
}

const workflow = readFileSync(".github/workflows/dependabot-automerge.yml", "utf8");
assert.ok(workflow.includes("github.event.pull_request.user.login == 'dependabot[bot]'"));
assert.ok(workflow.includes("github.event.pull_request.head.repo.full_name == github.repository"));
assert.doesNotMatch(workflow, /uses:\s*actions\/checkout|gh pr checkout|--admin|skip-verification/);
assert.ok(workflow.includes('--match-head-commit "$HEAD_SHA"'));
assert.ok(workflow.includes("--auto --squash"));
const policy = workflow.match(
  /      - name: Determine eligibility[\s\S]*?        run: \|\n((?:          [^\n]*\n)+)/
)?.[1];
assert.ok(policy, "eligibility policy is present");
const script = policy.replace(/^          /gm, "");
const directory = mkdtempSync(join(tmpdir(), "www-automerge-"));
try {
  const cases = [
    ["version-update:semver-patch", "npm_and_yarn", "false", "", true],
    ["version-update:semver-minor", "npm_and_yarn", "false", "", false],
    ["version-update:semver-major", "npm_and_yarn", "false", "", false],
    ["version-update:semver-patch", "github_actions", "false", "", false],
    ["version-update:semver-patch", "npm_and_yarn", "true", "", false],
    ["version-update:semver-patch", "npm_and_yarn", "", "", false],
    ["", "", "", "", false],
    ["version-update:semver-patch", "npm_and_yarn", "false", "dev-tooling", false],
    ["$(echo unsafe)", "npm_and_yarn", "false", "", false],
  ];
  for (const [
    index,
    [UPDATE_TYPE, ECOSYSTEM, MAINTAINER_CHANGES, DEPENDENCY_GROUP, expected],
  ] of cases.entries()) {
    const output = join(directory, `${index}.txt`);
    const result = spawnSync("bash", ["-e", "-c", script], {
      env: {
        ...process.env,
        UPDATE_TYPE,
        ECOSYSTEM,
        MAINTAINER_CHANGES,
        DEPENDENCY_GROUP,
        GITHUB_OUTPUT: output,
      },
      encoding: "utf8",
    });
    assert.equal(result.status, 0, result.stderr);
    assert.equal(readFileSync(output, "utf8").trim(), `eligible=${expected}`);
  }
} finally {
  rmSync(directory, { recursive: true });
}
console.log("Workflow pins, privileged workflow safeguards, and auto-merge policy checks passed.");
