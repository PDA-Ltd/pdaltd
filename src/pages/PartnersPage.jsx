import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../hooks/useTranslation";
import { partnersData } from "../data/partnersData.js";

const PartnersPage = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", ...new Set(partnersData.map((p) => p.category))];

  const filteredPartners =
    selectedCategory === "all"
      ? partnersData
      : partnersData.filter((partner) => partner.category === selectedCategory);

  const associations = useMemo(
    () => [
      {
        title: t("partnersPage.associations.items.ncpc.title"),
        description: t("partnersPage.associations.items.ncpc.description"),
      },
      {
        title: t("partnersPage.associations.items.citizensBureau.title"),
        description: t("partnersPage.associations.items.citizensBureau.description"),
      },
      {
        title: t("partnersPage.associations.items.wuscPac.title"),
        description: t("partnersPage.associations.items.wuscPac.description"),
      },
      {
        title: t("partnersPage.associations.items.dataProtectionCommission.title"),
        description: t("partnersPage.associations.items.dataProtectionCommission.description"),
      },
      {
        title: t("partnersPage.associations.items.gmef.title"),
        description: t("partnersPage.associations.items.gmef.description"),
      },
      {
        title: t("partnersPage.associations.items.afrea.title"),
        description: t("partnersPage.associations.items.afrea.description"),
      },
    ],
    [t]
  );

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
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
          className="w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover"
          alt="Our Partners"
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
          {t("partnersPage.title")}
        </motion.h1>
      </motion.div>

      {/* Category Filters */}
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
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-orange text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category === "all" ? t("partnersPage.all") : category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Partners Grid */}
      <motion.div
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPartners.map((partner, index) => (
            <motion.div
              key={partner.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="p-6 flex flex-col items-center text-center h-full">
                <div className="w-32 h-32 mb-4 flex items-center justify-center bg-gray-50 rounded-lg p-4">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">{partner.name}</h3>
                <span className="px-3 py-1 bg-orange/10 text-orange rounded-full text-xs font-semibold mb-3">
                  {partner.category}
                </span>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{partner.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* PDA Associations Section */}
      <motion.section
        className="w-full bg-gradient-to-br from-orange/10 via-orange/5 to-orange/10 py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t("partnersPage.associations.title")}
            </h2>
            <p className="text-gray-700 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
              {t("partnersPage.associations.intro")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {associations.map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 p-7 md:p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </section>
  );
};

export default PartnersPage;
