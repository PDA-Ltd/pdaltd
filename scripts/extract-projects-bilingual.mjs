/**
 * One-off migration: reads legacy ProjectsData.jsx array body, evaluates it with
 * bundled image imports, writes src/data/projectsRawContent.json (bilingual shell).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import * as IMG from "../src/assets/images/index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function extractArrayInner(source, marker) {
  const start = source.indexOf(marker);
  if (start === -1) throw new Error(`Marker not found: ${marker}`);
  let i = start + marker.length;
  let depth = 1;
  let inString = false;
  let quote = null;
  let escape = false;

  const bodyStart = i;
  for (; i < source.length; i++) {
    const c = source[i];
    if (escape) {
      escape = false;
      continue;
    }
    if (inString) {
      if (c === "\\") {
        escape = true;
        continue;
      }
      if (c === quote) {
        inString = false;
        quote = null;
      }
      continue;
    }
    if (c === '"' || c === "'" || c === "`") {
      inString = true;
      quote = c;
      continue;
    }
    if (c === "[") depth++;
    else if (c === "]") {
      depth--;
      if (depth === 0) {
        return source.slice(bodyStart, i);
      }
    }
  }
  throw new Error("Unclosed projects array");
}

function imageToKey(image) {
  for (const [k, v] of Object.entries(IMG)) {
    if (v === image) return k;
  }
  console.warn("Unknown image reference for project; defaulting to vsla");
  return "vsla";
}

const TEXT_KEYS = [
  "title",
  "description",
  "fullDescription",
  "snapshot",
  "howWeWentAboutIt",
  "objectives",
  "activities",
  "outcomes",
  "partners",
  "period",
  "category",
  "location",
  "status",
  "subtitle",
];

const jsxPath = path.join(root, "src/components/ProjectsData.jsx");
const source = fs.readFileSync(jsxPath, "utf8");
const inner = extractArrayInner(source, "export const projects = [");
const keys = Object.keys(IMG);
const fnBody = `const { ${keys.join(", ")} } = IMG;\nreturn [${inner}];`;
const fn = new Function("IMG", fnBody);

const projects = fn(IMG);

const bilingual = projects.map((p) => {
  const en = {};
  for (const k of TEXT_KEYS) {
    if (p[k] !== undefined) en[k] = p[k];
  }
  if (p.additionalSections != null) en.additionalSections = p.additionalSections;

  const row = {
    id: p.id,
    slug: p.slug,
    imageKey: imageToKey(p.image),
    color: p.color ?? "orange",
    en,
    fr: {},
  };
  if (p.detailLink) row.detailLink = p.detailLink;
  return row;
});

const outPath = path.join(root, "src/data/projectsRawContent.json");
fs.writeFileSync(outPath, JSON.stringify(bilingual, null, 2), "utf8");
console.log("Wrote", bilingual.length, "projects to", path.relative(root, outPath));
