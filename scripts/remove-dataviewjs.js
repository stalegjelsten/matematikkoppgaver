#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const VAULT_DIR = "/Users/stale/Documents/Obsidian/Matematikkoppgaver";

function removeDataviewjs(content) {
  // Remove "## Relatert" + following dataviewjs block
  let result = content.replace(
    /\n## Relatert\n```dataviewjs\n[\s\S]*?```\n?/g,
    ""
  );
  // Remove any remaining standalone dataviewjs blocks
  result = result.replace(/\n?```dataviewjs\n[\s\S]*?```\n?/g, "\n");
  return result;
}

const files = fs
  .readdirSync(VAULT_DIR)
  .filter((f) => f.endsWith(".md"))
  .map((f) => path.join(VAULT_DIR, f));

let count = 0;
for (const file of files) {
  const original = fs.readFileSync(file, "utf8");
  if (!original.includes("```dataviewjs")) continue;
  const updated = removeDataviewjs(original);
  fs.writeFileSync(file, updated, "utf8");
  count++;
}

console.log(`Done. Removed dataviewjs blocks from ${count} files.`);
