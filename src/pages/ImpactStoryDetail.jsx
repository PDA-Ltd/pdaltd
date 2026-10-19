import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaCalendarAlt, FaMapMarkerAlt, FaProjectDiagram, FaUser, FaTimes } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";
import { getImpactStoryForSlug } from "../data/impactStoriesData.js";

const toEmbedUrl = (url) => {
  if (!url) return "";
  if (url.includes("youtube.com/embed/")) return url;
  const watchMatch = url.match(/[?&]v=([^&]+)/);
  if (watchMatch?.[1]) return `https://www.youtube.com/embed/${watchMatch[1]}`;
  const shortMatch = url.match(/youtu\.be\/([^?&]+)/);
  if (shortMatch?.[1]) return `https://www.youtube.com/embed/${shortMatch[1]}`;
  return url;
};

const ImpactStoryDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t, language } = useTranslation();
  const [lightboxImage, setLightboxImage] = useState(null);
  const story = useMemo(() => getImpactStoryForSlug(slug, language), [slug, language]);

  if (!story) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{t("common.notFound")}</h1>
        <button
          onClick={() => navigate("/impact-stories")}
          className="px-6 py-3 bg-orange text-white rounded-lg font-semibold hover:bg-orange/90 transition-colors"
        >
          {t("impactStories.backToImpactStories")}
        </button>
      </div>
    );
  }

  const embedUrl = toEmbedUrl(story.videoUrl);

  return (
    <section className="max-container max-w-full w-full min-h-screen flex flex-col font-poppins bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        className="relative w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={story.image}
          className="w-full h-[420px] md:h-[620px] object-cover"
          alt={story.title}
          style={{ objectPosition: story.imagePosition }}
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <motion.button
            onClick={() => navigate("/impact-stories")}
            className="mb-6 flex items-center gap-2 text-white hover:text-orange transition-colors font-semibold"
            whileHover={{ x: -5 }}
          >
            <FaArrowLeft />
            {t("impactStories.backToImpactStories")}
          </motion.button>
          <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-orange text-white mb-4">
            {story.category}
          </span>
          <motion.h1
            className="font-bold text-3xl md:text-5xl text-white mb-4 max-w-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {story.title}
          </motion.h1>
          <div className="flex items-center gap-4 text-white/90 flex-wrap">
            <span className="flex items-center gap-2">
              <FaCalendarAlt />
              {story.date}
            </span>
            {story.location && (
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt />
                {story.location}
              </span>
            )}
            {story.person && (
              <span className="flex items-center gap-2">
                <FaUser />
                {story.person}
              </span>
            )}
          </div>
        </div>
      </motion.div>

      <motion.article
        className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {story.project && (
          <div className="mb-8 inline-flex items-center gap-3 bg-orange/10 text-orange rounded-xl px-5 py-3 font-semibold">
            <FaProjectDiagram />
            <span>{story.project}</span>
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            {(story.fullContent || [story.description]).map((paragraph, index) => {
              const boldMatch = paragraph.match(/^\*\*(.+)\*\*$/);
              if (boldMatch) {
                return (
                  <p key={index} className="text-base md:text-lg font-bold text-gray-900">
                    {boldMatch[1]}
                  </p>
                );
              }
              return (
                <p key={index} className="text-base md:text-lg">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>

        {embedUrl && (
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
              {t("impactStories.watchStory")}
            </h2>
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
              <iframe
                src={embedUrl}
                title={story.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </motion.div>
        )}

        {story.galleryImages.length > 0 && (
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
              {t("impactStories.photoGallery")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {story.galleryImages.map((image) => (
                <button
                  key={image.imageKey}
                  type="button"
                  onClick={() => setLightboxImage(image)}
                  className="relative block w-full h-56 rounded-xl overflow-hidden shadow-md group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2"
                >
                  <img
                    src={image.src}
                    alt={image.caption ? `${story.title} — ${image.caption}` : story.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  {image.caption && (
                    <span className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-black/60 text-white text-sm font-semibold">
                      {image.caption}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {story.keyOutcomes && (
          <motion.div
            className="mt-12 bg-gradient-to-br from-orange/10 to-orange/10 rounded-xl p-8 border-l-4 border-orange"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-bold text-xl text-gray-800 mb-4">{t("impactStories.keyOutcomes")}</h2>
            <ul className="space-y-2 text-gray-700">
              {story.keyOutcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => navigate("/impact-stories")}
            className="px-8 py-4 bg-orange text-white rounded-lg font-semibold hover:bg-orange/90 transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaArrowLeft />
            {t("impactStories.backToImpactStories")}
          </motion.button>
        </motion.div>
      </motion.article>

      {/* Image Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              className="relative max-w-5xl max-h-[85vh] w-full"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                className="absolute -top-10 right-0 md:top-2 md:right-2 text-white md:bg-black/50 md:rounded-full md:p-2 hover:text-orange transition-colors"
                aria-label={t("common.close")}
              >
                <FaTimes size={24} />
              </button>
              <img
                src={lightboxImage.src}
                alt={lightboxImage.caption ? `${story.title} — ${lightboxImage.caption}` : story.title}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              />
              {lightboxImage.caption && (
                <p className="mt-3 text-center text-white font-semibold">{lightboxImage.caption}</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ImpactStoryDetail;
