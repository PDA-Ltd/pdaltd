/**
 * Resolves one locale bundle for a bilingual news article.
 * - `en` is required for every article.
 * - `fr` is optional: any missing string or empty array falls back to English
 *   so new content can ship English-first and gain French over time.
 */

const isNonEmptyString = (v) => typeof v === "string" && v.trim().length > 0;

const isNonEmptyStringArray = (v) => Array.isArray(v) && v.some((x) => isNonEmptyString(x));

const mergeLocaleBundle = (en, frPartial) => {
  const fr = frPartial || {};
  return {
    date: isNonEmptyString(fr.date) ? fr.date : en.date,
    title: isNonEmptyString(fr.title) ? fr.title : en.title,
    description: isNonEmptyString(fr.description) ? fr.description : en.description,
    category: isNonEmptyString(fr.category) ? fr.category : en.category,
    location: isNonEmptyString(fr.location) ? fr.location : en.location,
    fullContent: isNonEmptyStringArray(fr.fullContent) ? fr.fullContent : en.fullContent,
    additionalInfo: isNonEmptyStringArray(fr.additionalInfo) ? fr.additionalInfo : en.additionalInfo,
  };
};

export function localizeNewsArticle(article, language) {
  const en = article.en;
  if (!en) {
    console.warn(`News article ${article.slug || article.id} is missing required "en" block`);
  }
  const bundle = language === "fr" ? mergeLocaleBundle(en, article.fr) : en;

  return {
    id: article.id,
    slug: article.slug,
    type: article.type,
    image: article.image,
    dateIso: article.dateIso,
    date: bundle.date,
    title: bundle.title,
    description: bundle.description,
    category: bundle.category,
    location: bundle.location,
    fullContent: bundle.fullContent,
    additionalInfo: bundle.additionalInfo,
    recordingUrl: article.recordingUrl,
    sourceUrl: article.sourceUrl,
  };
}

export function sortNewsByDateDesc(items) {
  return [...items].sort((a, b) => {
    const aIso = a.dateIso || "";
    const bIso = b.dateIso || "";
    if (aIso !== bIso) return bIso.localeCompare(aIso);
    return (b.id ?? 0) - (a.id ?? 0);
  });
}
