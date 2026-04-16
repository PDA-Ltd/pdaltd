import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaArrowLeft, FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";
import { newsAndActivitiesData } from "../data/newsAndActivitiesData.js";

const NewsDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const item = newsAndActivitiesData.find((item) => item.slug === slug);

  if (!item) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{t("common.notFound")}</h1>
        <button
          onClick={() => navigate("/news-and-activities")}
          className="px-6 py-3 bg-orange text-white rounded-lg font-semibold hover:bg-orange/90 transition-colors"
        >
          {t("common.backToNews")}
        </button>
      </div>
    );
  }

  return (
    <section className="max-container max-w-full w-full min-h-screen flex flex-col font-poppins bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.div
        className="relative w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={item.image}
          className="w-full h-[400px] md:h-[600px] object-cover"
          alt={item.title}
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <motion.button
            onClick={() => navigate("/news-and-activities")}
            className="mb-6 flex items-center gap-2 text-white hover:text-orange transition-colors font-semibold"
            whileHover={{ x: -5 }}
          >
            <FaArrowLeft />
            {t("common.backToNews")}
          </motion.button>
          <div className="flex items-center gap-4 mb-4 flex-wrap">
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
              item.type === "news" ? "bg-blue-500 text-white" : "bg-green-500 text-white"
            }`}>
              {item.type === "news" ? t("newsAndActivities.news") : t("newsAndActivities.activities")}
            </span>
            <span className="px-4 py-2 bg-black/50 text-white rounded-full text-sm font-semibold">
              {item.category}
            </span>
          </div>
          <motion.h1
            className="font-bold text-3xl md:text-5xl text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {item.title}
          </motion.h1>
          <div className="flex items-center gap-4 text-white/90 flex-wrap">
            <div className="flex items-center gap-2">
              <FaCalendarAlt />
              <span>{item.date}</span>
            </div>
            {item.location && (
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span>{item.location}</span>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.article
        className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="prose prose-lg max-w-none">
          {item.fullContent ? (
            <div className="text-gray-700 leading-relaxed space-y-6">
              {item.fullContent.map((paragraph, index) => (
                <p key={index} className="text-base md:text-lg">
                  {paragraph}
                </p>
              ))}
              {item.recordingUrl && (
                <p className="text-base md:text-lg">
                  <a
                    href={item.recordingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-orange underline decoration-2 underline-offset-2 hover:text-orange/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 rounded"
                  >
                    Access the full recording of the session here
                  </a>
                </p>
              )}
            </div>
          ) : (
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              {item.description}
            </p>
          )}
        </div>

        {/* Additional Info */}
        {item.additionalInfo && (
          <motion.div
            className="mt-12 bg-gradient-to-br from-orange/10 to-orange/10 rounded-xl p-8 border-l-4 border-orange"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-xl text-gray-800 mb-4">{t("common.keyPoints")}</h3>
            <ul className="space-y-2 text-gray-700">
              {item.additionalInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>{info}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Back Button */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => navigate("/news-and-activities")}
            className="px-8 py-4 bg-orange text-white rounded-lg font-semibold hover:bg-orange/90 transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaArrowLeft />
            {t("common.backToNews")}
          </motion.button>
        </motion.div>
      </motion.article>
    </section>
  );
};

export default NewsDetail;
