import React, { useState } from "react";
import { motion } from "framer-motion";
import { pic, micro, vid } from "../assets/icons";
import { podpic, soundwave } from "../assets/images";
import NewsletterForm from "../components/NewsletterForm";
import Button from "../components/Button";
import { FaApple, FaSpotify, FaSoundcloud, FaGoogle, FaPlayCircle, FaYoutube, FaVimeo } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";

const PodcastAndVodcast = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("podcast"); // "podcast" or "vodcast"

  const podcastPlatforms = [
    { name: "Apple Podcasts", icon: FaApple, color: "text-gray-800", link: "https://podcasts.apple.com" },
    { name: "Spotify", icon: FaSpotify, color: "text-green-500", link: "https://open.spotify.com" },
    { name: "Soundcloud", icon: FaSoundcloud, color: "text-orange", link: "https://soundcloud.com" },
    { name: "Google Podcast", icon: FaGoogle, color: "text-blue-500", link: "https://podcasts.google.com" },
  ];

  const vodcastPlatforms = [
    { name: "YouTube", icon: FaYoutube, color: "text-red-600", link: "https://www.youtube.com/@official_pdatv" },
    { name: "Vimeo", icon: FaVimeo, color: "text-blue-500", link: "https://vimeo.com" },
  ];

  const headerImage = activeTab === "podcast" 
    ? "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1920&q=80"
    : "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80";

  return (
    <section
      id="podcast-vodcast"
      className="max-container max-w-full w-full min-h-screen lg:justify-center flex flex-col font-poppins bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Hero Section */}
      <motion.div
        className="relative w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img 
          src={headerImage} 
          className="w-full h-[400px] md:h-[500px] object-cover" 
          alt={activeTab === "podcast" ? "Podcast" : "Vodcast"}
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.target.src = activeTab === "podcast" ? podpic : headerImage;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <motion.h1
          className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center absolute bottom-8 sm:bottom-10 left-0 right-0 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {activeTab === "podcast" ? t("podcast.title") : t("vodcast.title")}
        </motion.h1>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div
        className="w-full max-w-6xl mx-auto mt-8 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex gap-4 justify-center">
          <motion.button
            onClick={() => setActiveTab("podcast")}
            className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
              activeTab === "podcast"
                ? "bg-gradient-to-r from-orange to-orange/85 text-white shadow-lg scale-105"
                : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
            }`}
            whileHover={{ scale: activeTab === "podcast" ? 1.05 : 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t("nav.podcast")}
          </motion.button>
          <motion.button
            onClick={() => setActiveTab("vodcast")}
            className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
              activeTab === "vodcast"
                ? "bg-gradient-to-r from-orange to-orange/85 text-white shadow-lg scale-105"
                : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
            }`}
            whileHover={{ scale: activeTab === "vodcast" ? 1.05 : 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t("nav.vodcast")}
          </motion.button>
        </div>
      </motion.div>

      {/* Podcast Content */}
      {activeTab === "podcast" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {/* Podcast Player Section */}
          <motion.div
            className="w-full max-w-6xl mx-auto mt-12 mb-8 px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-r from-orange to-orange/85 rounded-2xl p-6 md:p-8 shadow-xl">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <motion.img
                  src={micro}
                  alt="Microphone"
                  className="w-20 h-20 md:w-24 md:h-24"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <motion.img
                  src={soundwave}
                  alt="Soundwave"
                  className="flex-1 h-16 md:h-20 object-contain"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Where to Listen Section */}
          <motion.div
            className="w-full max-w-6xl mx-auto mb-8 px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-700 mb-6">{t("podcast.listenOn")}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                {podcastPlatforms.map((platform, index) => {
                  const Icon = platform.icon;
                  return (
                    <motion.a
                      key={index}
                      href={platform.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300 group"
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className={`text-4xl ${platform.color} group-hover:scale-110 transition-transform duration-300`} />
                      <span className="font-bold text-gray-800 text-sm md:text-base">{platform.name}</span>
                      <span className="text-sm italic text-gray-600">{t("podcast.subscribe")}</span>
                    </motion.a>
                  );
                })}
              </div>
              <p className="text-sm italic text-gray-600 text-center">
                {t("podcast.orSearch")}
              </p>
            </div>
          </motion.div>

          {/* Episodes List */}
          <motion.div
            className="w-full max-w-6xl mx-auto mb-8 px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-orange mb-8 text-center">{t("podcast.latestEpisodes")}</h2>
            
            {/* Coming Soon Section */}
            <motion.div
              className="bg-gradient-to-br from-orange/10 via-orange/10 to-orange/5 rounded-2xl p-12 md:p-16 shadow-lg border-2 border-dashed border-orange/30"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center">
                <motion.div
                  className="inline-block mb-6"
                  animate={{ 
                    rotate: [0, 10, -10, 10, -10, 0],
                    scale: [1, 1.1, 1, 1.1, 1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  <FaPlayCircle className="text-orange text-8xl md:text-9xl opacity-50" />
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  {t("common.comingSoon")}!
                </h3>
                <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
                  {t("podcast.comingSoonMessage")}
                </p>
                <motion.div
                  className="inline-block px-6 py-3 bg-orange text-white rounded-full font-semibold"
                  animate={{ 
                    boxShadow: [
                      "0 0 0 0 rgba(248, 154, 35, 0.7)",
                      "0 0 0 10px rgba(248, 154, 35, 0)",
                      "0 0 0 0 rgba(248, 154, 35, 0)"
                    ]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity
                  }}
                >
                  {t("podcast.beFirstToKnow")}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      {/* Vodcast Content */}
      {activeTab === "vodcast" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {/* Vodcast Player Section */}
          <motion.div
            className="w-full max-w-6xl mx-auto mt-12 mb-8 px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-r from-orange to-orange/85 rounded-2xl p-6 md:p-8 shadow-xl">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <motion.div
                  className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaPlayCircle className="text-orange text-4xl md:text-5xl" />
                </motion.div>
                <motion.div
                  className="flex-1 text-center md:text-left"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">PDA Vodcast</h2>
                  <p className="text-white/90 text-lg">Video podcasts exploring development insights and stories</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Where to Watch Section */}
          <motion.div
            className="w-full max-w-6xl mx-auto mb-8 px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-700 mb-6">{t("vodcast.watchOn")}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                {vodcastPlatforms.map((platform, index) => {
                  const Icon = platform.icon;
                  return (
                    <motion.a
                      key={index}
                      href={platform.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300 group"
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className={`text-4xl ${platform.color} group-hover:scale-110 transition-transform duration-300`} />
                      <span className="font-bold text-gray-800 text-sm md:text-base">{platform.name}</span>
                      <span className="text-sm italic text-gray-600">{t("vodcast.subscribe")}</span>
                    </motion.a>
                  );
                })}
              </div>
              <p className="text-sm italic text-gray-600 text-center">
                {t("vodcast.orSearch")}
              </p>
            </div>
          </motion.div>

          {/* Episodes List */}
          <motion.div
            className="w-full max-w-6xl mx-auto mb-8 px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-orange mb-8 text-center">{t("vodcast.latestEpisodes")}</h2>
            
            {/* Coming Soon Section */}
            <motion.div
              className="bg-gradient-to-br from-orange/10 via-orange/10 to-orange/5 rounded-2xl p-12 md:p-16 shadow-lg border-2 border-dashed border-orange/30"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center">
                <motion.div
                  className="inline-block mb-6"
                  animate={{ 
                    rotate: [0, 10, -10, 10, -10, 0],
                    scale: [1, 1.1, 1, 1.1, 1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  <FaPlayCircle className="text-orange text-8xl md:text-9xl opacity-50" />
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  {t("common.comingSoon")}!
                </h3>
                <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
                  {t("vodcast.comingSoonMessage")}
                </p>
                <motion.div
                  className="inline-block px-6 py-3 bg-orange text-white rounded-full font-semibold"
                  animate={{ 
                    boxShadow: [
                      "0 0 0 0 rgba(248, 154, 35, 0.7)",
                      "0 0 0 10px rgba(248, 154, 35, 0)",
                      "0 0 0 0 rgba(248, 154, 35, 0)"
                    ]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity
                  }}
                >
                  {t("vodcast.beFirstToKnow")}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      {/* Newsletter Section */}
      <motion.div
        className="w-full max-w-6xl mx-auto mb-8 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-6 md:p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">
                {activeTab === "podcast" ? t("podcast.subscribeTitle") : t("vodcast.subscribeTitle")}
              </h3>
            </div>
            <div className="flex flex-col">
              <p className="font-bold mb-3 text-gray-800">
                {activeTab === "podcast" ? t("podcast.subscribeDescription") : t("vodcast.subscribeDescription")}
              </p>
              <p className="mb-4 text-gray-700 text-sm">
                {activeTab === "podcast" ? t("podcast.privacyNote") : t("vodcast.privacyNote")}
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <NewsletterForm />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PodcastAndVodcast;
