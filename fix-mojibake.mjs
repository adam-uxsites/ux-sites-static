import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join, extname } from "path";

const root = "artifacts/uxsites/src";
const exts = new Set([".tsx", ".ts", ".mjs"]);

function* walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (exts.has(extname(full))) yield full;
  }
}

const replacements = [
  // UTF-8 -> Windows-1252 mojibake of dashes
  { find: "\u00E2\u20AC\u201C", replace: "\u2013" },  // â€" -> en dash –
  { find: "\u00E2\u20AC\u201D", replace: "\u2014" },  // â€" -> em dash —

  // Bullet
  { find: "\u00E2\u20AC\u00A2", replace: "\u2022" },  // â€¢ -> bullet •

  // Check mark
  { find: "\u00E2\u0153\u201C", replace: "\u2713" },  // âœ" -> check ✓

  // Right arrow
  { find: "\u00E2\u2020\u2019", replace: "\u2192" },  // â†' -> arrow →

  // Multiplication/cancel X
  { find: "\u00E2\u0153\u2022", replace: "\u2715" },  // âœ• -> multiplication X ✕
];

let fixed = 0;
for (const file of walk(root)) {
  let content = readFileSync(file, "utf-8");
  let changed = false;
  for (const { find, replace } of replacements) {
    if (content.includes(find)) {
      content = content.replaceAll(find, replace);
      changed = true;
    }
  }
  if (changed) {
    writeFileSync(file, content, "utf-8");
    console.log(`Fixed: ${file}`);
    fixed++;
  }
}
console.log(`\nFixed ${fixed} files.`);
