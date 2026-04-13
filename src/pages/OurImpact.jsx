import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { obuasi } from "../assets/images";
import { useTranslation } from "../hooks/useTranslation";
import { FaGavel, FaHandshake, FaNetworkWired, FaChartLine, FaFileAlt, FaUsers, FaGlobe, FaAward, FaArrowRight } from "react-icons/fa";

/**
 * Full Our Impact page — preserved for future use.
 * To publish again: uncomment the `/our-impact` route and nav/footer/search entries in
 * main.jsx, Menu.jsx, constants/index.js, Footer.jsx, and SearchModal.jsx.
 */
const OurImpact = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [activePillar, setActivePillar] = useState("policies");
  const evidenceResearchSectionId = "impact-evidence-research";

  // Handle hash navigation on page load
  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.substring(1);
      if (hash === "policies" || hash === "practices" || hash === "systems") {
        setActivePillar(hash);
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            window.scrollBy(0, -100);
          }
        }, 300);
      }
    }
  }, [location.hash]);

  // Impact pillars data
  const impactPillars = [
    {
      id: "policies",
      icon: FaGavel,
      title: t("ourImpact.policies.title"),
      subtitle: t("ourImpact.policies.subtitle"),
      description: t("ourImpact.policies.description"),
      color: "orange",
      evidence: [
        {
          title: t("ourImpact.policies.evidence1.title"),
          description: t("ourImpact.policies.evidence1.description"),
          metric: t("ourImpact.policies.evidence1.metric"),
        },
        {
          title: t("ourImpact.policies.evidence2.title"),
          description: t("ourImpact.policies.evidence2.description"),
          metric: t("ourImpact.policies.evidence2.metric"),
        },
        {
          title: t("ourImpact.policies.evidence3.title"),
          description: t("ourImpact.policies.evidence3.description"),
          metric: t("ourImpact.policies.evidence3.metric"),
        },
      ],
    },
    {
      id: "practices",
      icon: FaHandshake,
      title: t("ourImpact.practices.title"),
      subtitle: t("ourImpact.practices.subtitle"),
      description: t("ourImpact.practices.description"),
      color: "orange",
      evidence: [
        {
          title: t("ourImpact.practices.evidence1.title"),
          description: t("ourImpact.practices.evidence1.description"),
          metric: t("ourImpact.practices.evidence1.metric"),
        },
        {
          title: t("ourImpact.practices.evidence2.title"),
          description: t("ourImpact.practices.evidence2.description"),
          metric: t("ourImpact.practices.evidence2.metric"),
        },
        {
          title: t("ourImpact.practices.evidence3.title"),
          description: t("ourImpact.practices.evidence3.description"),
          metric: t("ourImpact.practices.evidence3.metric"),
        },
      ],
    },
    {
      id: "systems",
      icon: FaNetworkWired,
      title: t("ourImpact.systems.title"),
      subtitle: t("ourImpact.systems.subtitle"),
      description: t("ourImpact.systems.description"),
      color: "orange",
      evidence: [
        {
          title: t("ourImpact.systems.evidence1.title"),
          description: t("ourImpact.systems.evidence1.description"),
          metric: t("ourImpact.systems.evidence1.metric"),
        },
        {
          title: t("ourImpact.systems.evidence2.title"),
          description: t("ourImpact.systems.evidence2.description"),
          metric: t("ourImpact.systems.evidence2.metric"),
        },
        {
          title: t("ourImpact.systems.evidence3.title"),
          description: t("ourImpact.systems.evidence3.description"),
          metric: t("ourImpact.systems.evidence3.metric"),
        },
      ],
    },
  ];

  const activePillarData = impactPillars.find(p => p.id === activePillar);

  return (
    <section
      id="our-impact"
      className="max-container max-w-full w-full min-h-screen font-poppins bg-white"
    >
      {/* Hero Section */}
      <motion.div
        className="relative w-full mt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img 
          src={obuasi} 
          className="w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] object-cover" 
          alt="Our Impact"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <motion.h1
            className="font-poppins font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white text-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {t("ourImpact.title")}
          </motion.h1>
          <motion.p
            className="text-white/90 text-lg sm:text-xl md:text-2xl text-center max-w-4xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {t("ourImpact.heroDescription")}
          </motion.p>
        </div>
      </motion.div>

      {/* Introduction Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t("ourImpact.introTitle")}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange to-orange/85 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              {t("ourImpact.introDescription")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three Pillars Navigation */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-white sticky top-20 z-40 shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
            {impactPillars.map((pillar) => {
              const Icon = pillar.icon;
              const isActive = activePillar === pillar.id;
              return (
                <motion.button
                  key={pillar.id}
                  onClick={() => {
                    setActivePillar(pillar.id);
                    // Update URL hash without scrolling
                    window.history.replaceState(null, null, `#${pillar.id}`);
                  }}
                  className={`group relative flex-1 flex flex-col md:flex-row items-center justify-center gap-4 p-6 md:p-8 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? pillar.color === "orange"
                        ? "bg-gradient-to-br from-orange to-orange/85 text-white shadow-2xl scale-105"
                        : "bg-gradient-to-br from-orange/80 to-orange text-white shadow-2xl scale-105"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:shadow-lg"
                  }`}
                  whileHover={{ scale: isActive ? 1.05 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className={`p-4 rounded-xl ${
                      isActive ? "bg-white/20" : "bg-white"
                    }`}
                    animate={isActive ? { rotate: [0, 5, -5, 0] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className={`text-3xl md:text-4xl ${isActive ? "text-white" : pillar.color === "orange" ? "text-orange" : "text-orange/90"}`} />
                  </motion.div>
                  <div className="text-center md:text-left">
                    <h3 className={`font-bold text-lg md:text-xl mb-1 ${isActive ? "text-white" : "text-gray-900"}`}>
                      {pillar.title}
                    </h3>
                    <p className={`text-sm md:text-base ${isActive ? "text-white/90" : "text-gray-600"}`}>
                      {pillar.subtitle}
                    </p>
                  </div>
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Pillar Content */}
      <section id={activePillar} className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            key={activePillar}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Pillar Header */}
            <div className="text-center mb-8">
              <motion.div
                className="inline-block mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <div className={`p-6 rounded-2xl inline-block ${
                  activePillarData.color === "orange"
                    ? "bg-gradient-to-br from-orange to-orange/85"
                    : "bg-gradient-to-br from-orange/80 to-orange"
                }`}>
                  <activePillarData.icon className="text-white text-5xl md:text-6xl" />
                </div>
              </motion.div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {activePillarData.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                {activePillarData.description}
              </p>
            </div>

            {/* Evidence Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {activePillarData.evidence.map((item, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  {/* Gradient Accent */}
                  <div className={`absolute top-0 left-0 w-full h-1 ${
                    activePillarData.color === "orange"
                      ? "bg-gradient-to-r from-orange to-orange/85"
                      : "bg-gradient-to-r from-orange/80 to-orange"
                  }`} />
                  
                  {/* Metric Badge */}
                  <div className={`absolute top-6 right-6 px-4 py-2 rounded-full text-white text-sm font-bold shadow-lg ${
                    activePillarData.color === "orange"
                      ? "bg-gradient-to-r from-orange to-orange/85"
                      : "bg-gradient-to-r from-orange/80 to-orange"
                  }`}>
                    {item.metric}
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <motion.button
                      type="button"
                      onClick={() => {
                        const el = document.getElementById(evidenceResearchSectionId);
                        if (!el) return;

                        // Scroll to the section with a stable offset (sticky navigation height)
                        // so it doesn't appear to jump upward.
                        const headerOffset = 110;
                        const targetTop =
                          el.getBoundingClientRect().top + window.pageYOffset - headerOffset;

                        window.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
                      }}
                      className={`mt-2 inline-flex items-center gap-2 font-semibold ${
                        activePillarData.color === "orange" ? "text-orange" : "text-orange/90"
                      }`}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>{t("ourImpact.learnMore")}</span>
                      <FaArrowRight />
                    </motion.button>
                  </div>

                  {/* Decorative Element */}
                  <div className={`absolute bottom-0 right-0 w-32 h-32 rounded-tl-full opacity-50 ${
                    activePillarData.color === "orange"
                      ? "bg-gradient-to-tl from-orange/5 to-transparent"
                      : "bg-gradient-to-tl from-orange/5 to-transparent"
                  }`} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-br from-orange via-orange to-orange/90 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${(i * 5) % 100}%`,
                top: `${(i * 7) % 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {t("ourImpact.metricsTitle")}
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              {t("ourImpact.metricsDescription")}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: t("ourImpact.metric1.label"), value: t("ourImpact.metric1.value") },
              { label: t("ourImpact.metric2.label"), value: t("ourImpact.metric2.value") },
              { label: t("ourImpact.metric3.label"), value: t("ourImpact.metric3.value") },
              { label: t("ourImpact.metric4.label"), value: t("ourImpact.metric4.value") },
            ].map((metric, index) => (
              <motion.div
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                >
                  {metric.value}
                </motion.div>
                <div className="text-sm md:text-base text-white/90 font-medium">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Evidence & Research Section */}
      <section
        id={evidenceResearchSectionId}
        className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("ourImpact.evidenceTitle")}
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              {t("ourImpact.evidenceDescription")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: FaFileAlt, title: t("ourImpact.evidence1.title"), description: t("ourImpact.evidence1.description") },
              { icon: FaChartLine, title: t("ourImpact.evidence2.title"), description: t("ourImpact.evidence2.description") },
              { icon: FaUsers, title: t("ourImpact.evidence3.title"), description: t("ourImpact.evidence3.description") },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 bg-gradient-to-br from-orange to-orange/85 rounded-xl text-white">
                      <Icon className="text-2xl" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-br from-orange via-orange to-orange/90 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FaGlobe className="text-6xl md:text-7xl mx-auto mb-6 text-orange" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {t("ourImpact.ctaTitle")}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              {t("ourImpact.ctaDescription")}
            </p>
            <motion.a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-orange to-orange/85 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-orange/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("ourImpact.ctaButton")}
            </motion.a>
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default OurImpact;
