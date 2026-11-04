import React, { useState } from "react";
import { motion } from "framer-motion";
import { kodu } from "../assets/images";
import { pic, micro, vid } from "../assets/icons";
import Button from "../components/Button";
import Tab from "../components/Tab";
import {
  rand1,
  rand2,
  rand3,
  rand4,
  rand5,
  rand6,
  rand7,
  rand8,
} from "../assets/images";

const VidPic = () => {
  const [activeTab, setActiveTab] = useState("videos");

  const albums = [
    {
      url: "https://photos.app.goo.gl/DeZ3HMJ9Nn5p1XcJ6",
      img: rand1,
      title: "Field Trip_February 2020",
      count: 50,
    },
    {
      url: "https://photos.app.goo.gl/Ax1K2Dpc7GCXwPcS8",
      img: rand2,
      title: "Farmer Voice Radio",
      count: 204,
    },
    {
      url: "https://photos.app.goo.gl/zMscdv8XuBUzQUQq7",
      img: rand3,
      title: "VSLA/GALS Learning Meeting, Bekwai",
      count: 48,
    },
    {
      url: "https://photos.app.goo.gl/8nudMZcdbmGX4Fmw5",
      img: rand4,
      title: "World Day Against Child Labour (Nyonkopa)",
      count: 15,
    },
    {
      url: "https://photos.app.goo.gl/A8eQU7bW2JrMxBUD9",
      img: rand5,
      title: "Cocoa Communities Library Project",
      count: 32,
    },
    {
      url: "https://photos.app.goo.gl/qzQQjUfwSvGEZPhv7",
      img: rand6,
      title: "(The Launch) Cocoa Communities Library Project",
      count: 98,
    },
    {
      url: "https://photos.app.goo.gl/8WtHfaQcPRaoTbSMA",
      img: rand7,
      title: "CCLP LAUNCH",
      count: 27,
    },
    {
      url: "https://photos.app.goo.gl/hoCJmrYiGjDmib7g8",
      img: rand8,
      title: "CCLP Quiz Wednesday",
      count: 92,
    },
  ];

  const videos = [
    {
      id: "61QUHKQ4ECc",
      title: "Knowledge Sharing Workshop on Child Protection",
    },
    { id: "6VhatIeDRpo", title: "Community Development Initiatives" },
    { id: "5r9aOmU0mWI", title: "VSLA Training Program" },
    { id: "vE39_togVdE", title: "Introduction of the VLSA/GALS Program" },
    { id: "iIA6YCYQK7s", title: "Short video on VSLA/GALS project" },
  ];

  return (
    <section
      id="vidpic"
      className="max-container max-w-full w-full min-h-screen justify-center flex flex-col font-poppins bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Hero Section */}
      <motion.div
        className="relative w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img src={kodu} className="w-full h-[400px] md:h-[500px] object-cover" alt="Videos & Pictures" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <motion.h1
          className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center absolute bottom-8 sm:bottom-10 left-0 right-0 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Videos & Pictures
        </motion.h1>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div
        className="flex justify-center gap-4 mt-12 mb-8 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={() => setActiveTab("videos")}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
            activeTab === "videos"
              ? "bg-orange text-white shadow-lg scale-105"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          Videos
        </button>
        <button
          onClick={() => setActiveTab("pictures")}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
            activeTab === "pictures"
              ? "bg-orange text-white shadow-lg scale-105"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          Pictures
        </button>
      </motion.div>

      {/* Videos Section */}
      {activeTab === "videos" && (
        <motion.section
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Main Video */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <motion.div
              className="lg:col-span-2"
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
              <motion.div
                className="mt-4 px-4 py-3 bg-orange text-white rounded-xl font-semibold"
                whileHover={{ scale: 1.02 }}
              >
                {videos[0].title}
              </motion.div>
            </motion.div>

            {/* Side Videos */}
            <div className="flex flex-col gap-4">
              {videos.slice(1, 4).map((video, index) => (
                <motion.div
                  key={index}
                  className="w-full aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-lg cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </motion.div>
              ))}
            </div>
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
              href="https://www.youtube.com/@official_pdatv/playlists"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button label="Watch All Videos >>>" />
            </a>
          </motion.div>
        </motion.section>
      )}

      {/* Pictures Section */}
      {activeTab === "pictures" && (
        <motion.section
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {albums.map((album, index) => (
              <motion.a
                key={index}
                href={album.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={album.img}
                    alt={album.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="font-semibold text-sm mb-1">{album.title}</p>
                    <p className="text-xs text-gray-300">{album.count} items</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>
      )}
    </section>
  );
};

export default VidPic;
