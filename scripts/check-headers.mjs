// scripts/check-headers.mjs
// TDD smoke test for security headers in next.config.ts
// Passes when: CSP is present, X-XSS-Protection is absent

import path from "path";
import fs from "fs";

const configPath = path.resolve(process.cwd(), "next.config.ts");
const src = fs.readFileSync(configPath, "utf8");

const hasCSP = src.includes("Content-Security-Policy");
const hasXXSS = src.includes("X-XSS-Protection");

let pass = true;

if (!hasCSP) {
  console.error("FAIL: Content-Security-Policy not found in next.config.ts");
  pass = false;
} else {
  console.log("PASS: Content-Security-Policy found");
}

if (hasXXSS) {
  console.error("FAIL: X-XSS-Protection still present in next.config.ts (should be removed)");
  pass = false;
} else {
  console.log("PASS: X-XSS-Protection not present (good)");
}

process.exit(pass ? 0 : 1);
