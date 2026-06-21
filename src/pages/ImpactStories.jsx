import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaPlayCircle, FaImages, FaUser } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";
import { getImpactStoriesForLocale } from "../data/impactStoriesData.js";
import { realimpact } from "../assets/images";

const ImpactStories = () => {
  const { t, language } = useTranslation();
  const navigate = useNavigate();
  const stories = useMemo(() => getImpactStoriesForLocale(language), [language]);
  const categories = useMemo(
    () => [t("impactStories.all"), ...new Set(stories.map((story) => story.category))],
    [stories, t]
  );
  const [activeCategory, setActiveCategory] = useState(t("impactStories.all"));

  const filteredStories =
    activeCategory === t("impactStories.all")
      ? stories
      : stories.filter((story) => story.category === activeCategory);

  return (
    <section
      id="impact-stories"
      className="max-container max-w-full w-full min-h-screen flex flex-col font-poppins bg-gradient-to-b from-gray-50 to-white"
    >
      <motion.div
        className="relative w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={realimpact}
          className="w-full h-[400px] md:h-[500px] object-cover"
          alt={t("impactStories.title")}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent" />
        <div className="absolute bottom-8 sm:bottom-10 left-0 right-0 px-4 text-center">
          <motion.h1
            className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t("impactStories.title")}
          </motion.h1>
          <motion.p
            className="mt-4 text-white/90 text-base md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            {t("impactStories.description")}
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === category
                ? "bg-orange text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story, index) => (
            <motion.article
              key={story.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Link
                to={`/impact-stories/${story.slug}`}
                className="relative h-52 overflow-hidden block focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-orange"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange text-white">
                    {story.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  {story.videoUrl && (
                    <span className="p-2 bg-black/60 text-white rounded-full" title={t("impactStories.videoStory")}>
                      <FaPlayCircle />
                    </span>
                  )}
                  {story.galleryImages.length > 0 && (
                    <span className="p-2 bg-black/60 text-white rounded-full" title={t("impactStories.photoStory")}>
                      <FaImages />
                    </span>
                  )}
                </div>
              </Link>
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-500 text-sm mb-3">
                  <span className="inline-flex items-center gap-2">
                    <FaCalendarAlt />
                    {story.date}
                  </span>
                  {story.location && (
                    <span className="inline-flex items-center gap-2">
                      <FaMapMarkerAlt />
                      {story.location}
                    </span>
                  )}
                </div>
                {story.person && (
                  <div className="flex items-center gap-2 text-orange text-sm font-semibold mb-3">
                    <FaUser />
                    <span>{story.person}</span>
                  </div>
                )}
                <Link
                  to={`/impact-stories/${story.slug}`}
                  className="block mb-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 rounded"
                >
                  <h2 className="font-bold text-xl text-gray-800 line-clamp-2 hover:text-orange transition-colors">
                    {story.title}
                  </h2>
                </Link>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                  {story.description}
                </p>
                <motion.button
                  onClick={() => navigate(`/impact-stories/${story.slug}`)}
                  className="text-orange font-semibold text-sm hover:text-orange/80 transition-colors flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  {t("common.readMore")}
                  <span>→</span>
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ImpactStories;
