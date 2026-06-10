import { readFileSync, readdirSync } from "fs";
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

// Known mojibake: â (U+00E2) followed by Windows-1252 high-byte as Latin-1 char
// The 2nd char in the mojibake sequence can be:
// U+20AC (€) for 0x80 — the most common
// U+0153 (œ) for 0x9C
// U+2020 (†) for 0x86
// U+2022 (•) for 0x95 (actually no, 0x95 doesn't map this way in Windows-1252...)
// Wait let me think again systematically.

const secondCharRanges = [
  // Windows-1252 bytes 0x80-0x9F mapped to Unicode
  // These are the ones that differ from ISO-8859-1
  { code: 0x80, chr: "\u20AC" }, // €
  { code: 0x82, chr: "\u201A" }, // ‚
  { code: 0x83, chr: "\u0192" }, // ƒ
  { code: 0x84, chr: "\u201E" }, // „
  { code: 0x85, chr: "\u2026" }, // …
  { code: 0x86, chr: "\u2020" }, // †
  { code: 0x87, chr: "\u2021" }, // ‡
  { code: 0x88, chr: "\u02C6" }, // ˆ
  { code: 0x89, chr: "\u2030" }, // ‰
  { code: 0x8A, chr: "\u0160" }, // Š
  { code: 0x8B, chr: "\u2039" }, // ‹
  { code: 0x8C, chr: "\u0152" }, // Œ
  { code: 0x8E, chr: "\u017D" }, // Ž
  { code: 0x91, chr: "\u2018" }, // '
  { code: 0x92, chr: "\u2019" }, // '
  { code: 0x93, chr: "\u201C" }, // "
  { code: 0x94, chr: "\u201D" }, // "
  { code: 0x95, chr: "\u2022" }, // •
  { code: 0x96, chr: "\u2013" }, // –
  { code: 0x97, chr: "\u2014" }, // —
  { code: 0x98, chr: "\u02DC" }, // ˜
  { code: 0x99, chr: "\u2122" }, // ™
  { code: 0x9A, chr: "\u0161" }, // š
  { code: 0x9B, chr: "\u203A" }, // ›
  { code: 0x9C, chr: "\u0153" }, // œ
  { code: 0x9E, chr: "\u017E" }, // ž
  { code: 0x9F, chr: "\u0178" }, // Ÿ
];

// Build a set of known mojibake second characters
const knownSecondChars = new Set(secondCharRanges.map(r => r.chr));

const replRegex = new RegExp("\u00E2([" + [...knownSecondChars].join("") + "])", "g");

let total = 0;
for (const file of walk(root)) {
  const content = readFileSync(file, "utf-8");
  let match;
  while ((match = replRegex.exec(content)) !== null) {
    const seq = content.slice(match.index, match.index + 3);
    const codes = [...seq].map(c => "U+" + c.charCodeAt(0).toString(16).toUpperCase());
    const ctx = content.slice(Math.max(0, match.index - 15), match.index + 25).replace(/\n/g, "\\n");
    console.log(`${file}: ${codes.join(" ")} | ${ctx}`);
    total++;
    if (total >= 30) break; // show first 30
  }
  if (total >= 30) break;
}
if (total === 0) {
  console.log("No remaining mojibake found!");
} else {
  console.log(`\nFound ${total} potential matches (showing first 30).`);
}
