import React, { useState } from "react";
import { motion } from "framer-motion";
import { pic, micro, vid } from "../assets/icons";
import { publication, glasses, indigenous, realimpact, education, march26quarter } from "../assets/images";
import Button from "../components/Button";
import BookSlider from "../components/BookSlider";
import FilterableTable from "../components/FilterableTable";
import NewsletterForm from "../components/NewsletterForm";
import { FaMicrophone, FaImage, FaVideo, FaDownload } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";

const Publications = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("publications");
  const newsletterItems = [
    {
      title: "Pushing Forward Together",
      date: "March 2026",
      image: march26quarter,
      url: "https://sh1.sendinblue.com/adf0b3fzwlpfe.html?t=1785147349233",
    },
    {
      title: "From Research to Real Impact: Our Latest Milestones and Opportunities",
      date: "September 2025",
      image: realimpact,
      url: "https://info.mailer.pdaghana.com/emails/webview/1470346/156993448141916027",
    },
    {
      title: "Indigenous Knowledge Systems in Evaluation Practice",
      date: "July 2025",
      image: indigenous,
      url: "https://info.mailer.pdaghana.com/emails/webview/1470346/164329918169089334",
    },
    {
      title: "See How Education Is Transforming Lives",
      date: "May 2025",
      image: education,
      url: "https://info.mailer.pdaghana.com/emails/webview/1470346/153556296073741665",
    },
  ];

  return (
    <section
      id="publications"
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
          src={glasses} 
          className="w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover" 
          alt="Publications"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <motion.h1
          className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center absolute bottom-8 sm:bottom-10 left-0 right-0 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {t("publications.title")}
        </motion.h1>
      </motion.div>

      {/* Tabs */}
      <motion.div
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-wrap gap-4 justify-center">
          {[
            { key: "publications", label: "Publications" },
            { key: "newsletters", label: "Newsletters" },
          ].map((tab) => (
            <motion.button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.key
                  ? "bg-orange text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {activeTab === "publications" && (
        <>
          {/* Featured Publication */}
          <motion.div
            className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                className="bg-gradient-to-br from-orange to-orange/85 rounded-2xl p-6 shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src={publication} 
                  alt="2023 In Review" 
                  className="w-full h-auto rounded-lg" 
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
              <div>
                <motion.h1
                  className="font-bold text-3xl md:text-4xl mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  2023 IN REVIEW:
                </motion.h1>
                <motion.h2
                  className="text-2xl md:text-3xl mb-4 text-orange"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  Our Impact
                </motion.h2>
                <div className="w-16 h-1 bg-orange mb-5"></div>
                <h3 className="mb-6 text-gray-600 font-semibold">January, 2024</h3>
                <motion.div className="mb-8" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="/assets/documents/2023-in-review.pdf"
                    download="2023-in-review.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button label={`${t("common.download")} >>>`} />
                  </a>
                </motion.div>
                <motion.div
                  className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-6 shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed">
                    {t("publications.featuredDescription")}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Book Slider */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <BookSlider />
          </motion.div>

          {/* Filterable Table */}
          <motion.div
            className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FilterableTable />
          </motion.div>
        </>
      )}

      {activeTab === "newsletters" && (
        <motion.div
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-2xl md:text-3xl text-gray-900">Newsletters</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsletterItems.map((item, index) => (
              <motion.a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute top-4 right-4 text-right text-white">
                    <p className="font-bold text-3xl leading-none tracking-wide">NEWS</p>
                    <p className="font-semibold text-xl">{item.date}</p>
                  </div>
                  <div className="absolute left-4 right-4 bottom-4">
                    <h3 className="text-white text-xl font-semibold leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}

      {/* Media Icons Section */}
      <motion.div
        className="w-full max-w-6xl mx-auto mb-8 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-wrap justify-center gap-6">
          <motion.a
            href="/vodcasts"
            className="w-20 h-20 bg-orange rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaMicrophone className="text-white text-3xl" />
          </motion.a>
          <motion.a
            href="/photos"
            className="w-20 h-20 bg-orange rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaImage className="text-white text-3xl" />
          </motion.a>
          <motion.a
            href="/videos"
            className="w-20 h-20 bg-orange rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaVideo className="text-white text-3xl" />
          </motion.a>
        </div>
      </motion.div>

      {/* Newsletter Section - Fixed spacing */}
      <motion.div
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 mt-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-8 md:p-10 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-xl md:text-2xl mb-4 text-gray-800">
                {t("publications.subscribeTitle")}
              </h3>
            </div>
            <div className="flex flex-col">
              <p className="font-bold mb-3 text-gray-800 text-lg">
                {t("publications.subscribeDescription")}
              </p>
              <p className="mb-6 text-gray-700 text-sm leading-relaxed">
                {t("publications.privacyNote")}
              </p>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <NewsletterForm />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Publications;
