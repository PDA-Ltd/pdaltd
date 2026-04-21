import projectsRaw from "./projectsRawContent.json";
import * as IMG from "../assets/images/index.js";
import { localizeProject } from "./projectLocalization.js";

const withImages = projectsRaw.map((row) => {
  const image = IMG[row.imageKey];
  if (!image) {
    console.warn(`projectsCatalog: missing image for imageKey "${row.imageKey}" (slug: ${row.slug})`);
  }
  return {
    ...row,
    image: image || IMG.vsla,
  };
});

/**
 * @param {"en"|"fr"} lang
 */
export function getProjectsForLocale(lang) {
  return withImages.map((row) => localizeProject(row, lang));
}

/**
 * @param {string} slug
 * @param {"en"|"fr"} lang
 */
export function getProjectForSlug(slug, lang) {
  const row = withImages.find((p) => p.slug === slug);
  if (!row) return null;
  return localizeProject(row, lang);
}

/** Default export for legacy imports (English). */
export const projects = getProjectsForLocale("en");
