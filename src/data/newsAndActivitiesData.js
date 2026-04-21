/**
 * News & Activities — runtime wiring (sorting + locale).
 * Editors add stories in `newsArticlesContent.js` (see banner comment there).
 * Images resolve like projects: `imageKey` must match an export from `src/assets/images/index.js`; unknown keys fall back to `vsla`.
 */

import * as IMG from "../assets/images/index.js";
import { newsArticlesRaw } from "./newsArticlesContent.js";
import { localizeNewsArticle, sortNewsByDateDesc } from "./newsLocalization.js";

const withResolvedImages = newsArticlesRaw.map((article) => {
  const image = IMG[article.imageKey];
  if (!image) {
    console.warn(
      `newsAndActivitiesData: missing image for imageKey "${article.imageKey}" (slug: ${article.slug})`
    );
  }
  return {
    ...article,
    image: image || IMG.vsla,
  };
});

/**
 * @param {"en"|"fr"} lang
 */
export function getNewsArticlesForLocale(lang) {
  return sortNewsByDateDesc(
    withResolvedImages.map((article) => localizeNewsArticle(article, lang))
  );
}

/**
 * @param {string} slug
 * @param {"en"|"fr"} lang
 */
export function getNewsArticleForSlug(slug, lang) {
  const raw = withResolvedImages.find((a) => a.slug === slug);
  if (!raw) return null;
  return localizeNewsArticle(raw, lang);
}

/** @deprecated Prefer getNewsArticlesForLocale(language) — kept for any legacy imports (English only). */
export const newsAndActivitiesData = getNewsArticlesForLocale("en");
