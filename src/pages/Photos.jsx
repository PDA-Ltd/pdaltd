import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../hooks/useTranslation";
import {
  rand1,
  rand2,
  rand3,
  rand4,
  rand5,
  rand6,
  rand7,
  rand8,
  rand9,
  rand10,
  rand11,
  rand12,
  rand13,
  rand14,
  rand15,
  rand16,
  rand17,
  rand18,
  absa,
  rep,
  de,
  swims,
  dpc,
  yofeb,
syh,
fow,
bdi,
kswa,
kswb,
etg,
image2
} from "../assets/images";

const Photos = () => {
  const { t } = useTranslation();
  const albums = [
    {
      url: "https://photos.app.goo.gl/XF1mZjagnw3KD5LK7",
      img: dpc,
      title: "Data Protection Workshop",
      count: 22,
    },
    {
      url: "https://photos.app.goo.gl/HUiCMbXahGvjyRDY7",
      img: yofeb,
      title: "YOFEB-4G Project",
      count: 181,
    },
    {
      url: "https://photos.app.goo.gl/HT3GrzSHciSQj4cu8",
      img: absa,
      title: "ABSA Project",
      count: 109,
    },
    {
      url: "https://photos.app.goo.gl/cY38Ljv2rZGUXrTM8",
      img: rep,
      title: "Rural Enterprises Programme (REP)",
      count: 30,
    },
    {
      url: "https://photos.app.goo.gl/JCK1Ngv6FWKCWPNE7",
      img: swims,
      title: "SWIMS Workshop",
      count: 102,
    },
    {
      url: "https://photos.app.goo.gl/aGV3XzH5QpSJX6y86",
      img: de,
      title: "DE Thematic Review",
      count: 132,
    },
    
    {
      url: "https://photos.app.goo.gl/r8J4KovpLYoACtA39",
      img: etg,
      title: "ETG Uganda Flashcards",
      count: 63,
    },
    {
      url: "https://photos.app.goo.gl/AyczcDuGwfea9zES6",
      img: kswa,
      title: "8th Knowledge Sharing Workshop-Accra",
      count: 183,
    },
    {
      url: "https://photos.app.goo.gl/it5TGT6UFtzveLVy5",
      img: kswb,
      title: "8th Knowledge Sharing Workshop-Bechem",
      count: 158,
    },
    {
      url: " https://photos.app.goo.gl/TQxQYkmmt8vjRnYJ6",
      img: syh,
      title: "A Report Launch-State of Youth Health in Ghana's Construction Industry",
      count: 73,
    },
    {
      url: "https://photos.app.goo.gl/EvZK3zkNcfqHX8iU7",
      img: fow,
      title: "Future of Work",
      count: 31,
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
      url: "https://photos.app.goo.gl/DeZ3HMJ9Nn5p1XcJ6",
      img: rand2,
      title: "Field Research",
      count: 50,
    },
    {
      url: "https://photos.app.goo.gl/ko9fjq5Kf8AVvV8a9",
      img: rand3,
      title: "Women Empowerment Initiatives",
      count: 78,
    },
        {
      url: "https://photos.app.goo.gl/YXXzHXpF9tYBcQcMA",
      img: rand16,
      title: "Community Events",
      count: 60,
    },
    {
      url: "https://photos.app.goo.gl/8WtHfaQcPRaoTbSMA",
      img: rand7,
      title: "CCLP LAUNCH",
      count: 27,
    },
    {
      url: "https://photos.app.goo.gl/z2jKLC7qUMkbhmxA8",
      img: bdi,
      title: "Business Development Index",
      count: 24,
    },
    {
      url: "https://photos.app.goo.gl/Ax1K2Dpc7GCXwPcS8",
      img: rand18,
      title: "Impact Assessment Activities",
      count: 55,
    },
  ];

  // Using a professional photography-themed header image
  // const headerImage = "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&q=80";

  return (
    <section
      id="photos"
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
          src={image2} 
          className="w-full h-[400px] md:h-[500px] object-cover object-top" 
          alt="Photos" 
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
          {t("photos.title")}
        </motion.h1>
      </motion.div>

      {/* Photos Gallery */}
      <motion.section
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-10"
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
    </section>
  );
};

export default Photos;
