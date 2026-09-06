import React from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { useTranslation } from "../hooks/useTranslation";
import { videospage } from "../assets/images";

const Videos = () => {
  const { t } = useTranslation();
  const videos = [
    {
      id: "CBXOLspFKug",
      title: "8th Knowledge Sharing Workshop",
    },
    { id: "VSvz_fSONdU", title: "Making M.E.R.L work for a change" },
    { id: "sVqGZfIW5zc", title: "Equipping organizations to thrive and transform communities" },
    { id: "7tQK-p01OUA", title: "Webinar-Early Childhood Literacy" },
    { id: "1jyhbZKsKVY", title: "Indigenous Knowledge Systems" },
    { id: "eK4T94Q-4Uw", title: "Young Female Business for Growth" },
    { id: "x8nvCUvf9Bw", title: "8KSW-Documentary" },
    { id: "lpoBrrvidpw", title: "The Experiences of Female-led Micro and Small scale enterprises" },
    { id: "CIpl6mAXpts", title: "The story of Salomey" },
    { id: "rcsM63m0EG8", title: "PDA 2024 End of year message " },
  ];

  const headerImage = videospage;

  return (
    <section
      id="videos"
      className="max-container max-w-full w-full min-h-screen justify-center flex flex-col font-poppins bg-gradient-to-b from-gray-50 to-white"
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
          alt="Videos" 
          onError={(e) => {
            // Fallback to a solid color if image fails to load
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
          {t("videos.title")}
        </motion.h1>
      </motion.div>

      {/* Main Video Section */}
      <motion.section
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Main Video - Centered with Title on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8 items-center">
          <motion.div
            className="lg:col-span-2 order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videos[0].id}`}
                title={videos[0].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          </motion.div>

          {/* Title on Right */}
          <motion.div
            className="lg:col-span-1 order-1 lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-orange to-orange/85 rounded-xl p-6 shadow-xl">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">
                {videos[0].title}
              </h2>
              <div className="w-16 h-1 bg-white mb-4"></div>
              <p className="text-white/90 text-sm">
                {t("videos.featuredDescription")}
              </p>
            </div>
          </motion.div>
        </div>

        {/* All Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="w-full aspect-video bg-gray-900">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 text-sm">{video.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Watch All Button */}
        <motion.div
          className="flex justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="https://www.youtube.com/@pdatv3656/playlists"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button label={`${t("videos.watchAllVideos")} >>>`} />
          </a>
        </motion.div>
      </motion.section>
    </section>
  );
};

export default Videos;
