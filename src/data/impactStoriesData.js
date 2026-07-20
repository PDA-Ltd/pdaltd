import * as IMG from "../assets/images/index.js";
import { impactStoriesRaw } from "./impactStoriesContent.js";

const isNonEmptyString = (value) => typeof value === "string" && value.trim().length > 0;
const isNonEmptyStringArray = (value) =>
  Array.isArray(value) && value.some((item) => isNonEmptyString(item));

const mergeLocaleBundle = (en, frPartial) => {
  const fr = frPartial || {};

  return {
    date: isNonEmptyString(fr.date) ? fr.date : en.date,
    title: isNonEmptyString(fr.title) ? fr.title : en.title,
    description: isNonEmptyString(fr.description) ? fr.description : en.description,
    category: isNonEmptyString(fr.category) ? fr.category : en.category,
    location: isNonEmptyString(fr.location) ? fr.location : en.location,
    person: isNonEmptyString(fr.person) ? fr.person : en.person,
    project: isNonEmptyString(fr.project) ? fr.project : en.project,
    fullContent: isNonEmptyStringArray(fr.fullContent) ? fr.fullContent : en.fullContent,
    keyOutcomes: isNonEmptyStringArray(fr.keyOutcomes) ? fr.keyOutcomes : en.keyOutcomes,
  };
};

const resolveImage = (imageKey, fallback = IMG.realimpact) => {
  if (!imageKey) return fallback;
  const image = IMG[imageKey];
  if (!image) {
    console.warn(`impactStoriesData: missing image for imageKey "${imageKey}"`);
  }
  return image || fallback;
};

const withResolvedMedia = impactStoriesRaw.map((story) => ({
  ...story,
  image: resolveImage(story.imageKey),
  galleryImages: (story.galleryImageKeys || []).map((imageKey) => ({
    imageKey,
    src: resolveImage(imageKey),
  })),
}));

const localizeImpactStory = (story, language) => {
  const en = story.en;
  if (!en) {
    console.warn(`Impact story ${story.slug || story.id} is missing required "en" block`);
  }

  const bundle = language === "fr" ? mergeLocaleBundle(en, story.fr) : en;

  return {
    id: story.id,
    slug: story.slug,
    image: story.image,
    imagePosition: story.imagePosition || "center",
    galleryImages: story.galleryImages,
    videoUrl: story.videoUrl,
    dateIso: story.dateIso,
    date: bundle.date,
    title: bundle.title,
    description: bundle.description,
    category: bundle.category,
    location: bundle.location,
    person: bundle.person,
    project: bundle.project,
    fullContent: bundle.fullContent,
    keyOutcomes: bundle.keyOutcomes,
  };
};

const sortByDateDesc = (items) =>
  [...items].sort((a, b) => {
    const aIso = a.dateIso || "";
    const bIso = b.dateIso || "";
    if (aIso !== bIso) return bIso.localeCompare(aIso);
    return (b.id ?? 0) - (a.id ?? 0);
  });

export function getImpactStoriesForLocale(language) {
  return sortByDateDesc(withResolvedMedia.map((story) => localizeImpactStory(story, language)));
}

export function getImpactStoryForSlug(slug, language) {
  const story = withResolvedMedia.find((item) => item.slug === slug);
  if (!story) return null;
  return localizeImpactStory(story, language);
}
