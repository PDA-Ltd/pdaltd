import React from "react";
import { motion } from "framer-motion";
import NewsletterForm from "../components/NewsletterForm";
import { FaYoutube, FaVimeo, FaPlayCircle } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";

const Vodcast = () => {
  const { t } = useTranslation();
  const vodcastEpisodes = [
    {
      id: "VSvz_fSONdU",
      title: "Making M.E.R.L work for a change",
    },
    {
      id: "sVqGZfIW5zc",
      title: "Equipping organizations to thrive and transform communities",
    },
  ];

  const platforms = [
    { name: "YouTube", icon: FaYoutube, color: "text-red-600", link: "https://www.youtube.com/@pdatv3656" },
    { name: "Vimeo", icon: FaVimeo, color: "text-blue-500", link: "https://vimeo.com" },
  ];

  // Using a professional video podcast-themed header image
  const headerImage = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80";

  return (
    <section
      id="vodcast"
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
          alt="Vodcast" 
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.style.backgroundColor = '#F89823';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <motion.h1
          className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center absolute bottom-8 sm:bottom-10 left-0 right-0 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {t("vodcast.title")}
        </motion.h1>
      </motion.div>

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

      {/* Episodes List */}
      <motion.div
        className="w-full max-w-6xl mx-auto mb-8 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-orange mb-8 text-center">{t("vodcast.latestEpisodes")}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {vodcastEpisodes.map((episode, index) => (
            <motion.article
              key={episode.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="aspect-video bg-gray-900">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${episode.id}`}
                  title={episode.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg md:text-xl font-bold text-gray-900">
                  {episode.title}
                </h3>
              </div>
            </motion.article>
          ))}
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
            {platforms.map((platform, index) => {
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
              <h3 className="font-bold text-xl mb-4">{t("vodcast.subscribeTitle")}</h3>
            </div>
            <div className="flex flex-col">
              <p className="font-bold mb-3 text-gray-800">
                {t("vodcast.subscribeDescription")}
              </p>
              <p className="mb-4 text-gray-700 text-sm">
                {t("vodcast.privacyNote")}
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

export default Vodcast;
