/**
 * Merges bilingual project rows (en + optional fr) into a flat object for the UI.
 * Missing French strings or empty arrays fall back to English.
 */

const isNonEmptyString = (v) => typeof v === "string" && v.trim().length > 0;

const isNonEmptyStringArray = (v) =>
  Array.isArray(v) && v.some((x) => isNonEmptyString(String(x)));

const pickStr = (frVal, enVal) => (isNonEmptyString(frVal) ? frVal : enVal ?? "");

const pickArr = (frVal, enVal) =>
  isNonEmptyStringArray(frVal) ? frVal : Array.isArray(enVal) ? enVal : [];

const mergeSectionContent = (frContent, enContent) => {
  if (Array.isArray(frContent) && frContent.length > 0) return frContent;
  return enContent;
};

const mergeAdditionalSections = (enSecs, frSecs) => {
  if (!enSecs?.length) return undefined;
  if (!frSecs?.length) return enSecs;
  return enSecs.map((en, i) => {
    const fr = frSecs[i] || {};
    return {
      title: pickStr(fr.title, en.title),
      content: mergeSectionContent(fr.content, en.content),
    };
  });
};

const mergeLocaleBundle = (en, frPartial) => {
  const fr = frPartial || {};
  const out = {
    title: pickStr(fr.title, en.title),
    description: pickStr(fr.description, en.description),
    fullDescription: pickStr(fr.fullDescription, en.fullDescription),
    snapshot: pickStr(fr.snapshot, en.snapshot),
    howWeWentAboutIt: pickStr(fr.howWeWentAboutIt, en.howWeWentAboutIt),
    objectives: pickArr(fr.objectives, en.objectives),
    activities: pickArr(fr.activities, en.activities),
    outcomes: pickArr(fr.outcomes, en.outcomes),
    partners: pickStr(fr.partners, en.partners),
    period: pickStr(fr.period, en.period),
    category: pickStr(fr.category, en.category),
    location: pickStr(fr.location, en.location),
    status: pickStr(fr.status, en.status),
    subtitle: pickStr(fr.subtitle, en.subtitle),
  };

  const sections = mergeAdditionalSections(en.additionalSections, fr.additionalSections);
  if (sections) out.additionalSections = sections;
  return out;
};

/**
 * @param {object} row — raw row with image resolved, en, fr, id, slug, color, detailLink?
 * @param {"en"|"fr"} language
 */
export function localizeProject(row, language) {
  const en = row.en || {};
  const bundle = language === "fr" ? mergeLocaleBundle(en, row.fr) : { ...en };

  return {
    id: row.id,
    slug: row.slug,
    image: row.image,
    color: row.color,
    detailLink: row.detailLink,
    ...bundle,
  };
}

/**
 * Legacy archived rows may define `titleFr`, `descriptionFr`, etc.
 * Until those are completed, the UI keeps English text for archived projects in all locales.
 */
export function localizeArchivedProject(project, language) {
  void language;
  return project;
}
