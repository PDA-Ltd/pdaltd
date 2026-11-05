import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { FaArrowRight } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-r from-orange via-orange/95 to-orange relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 50px,
            rgba(255, 255, 255, 0.1) 50px,
            rgba(255, 255, 255, 0.1) 100px
          )`,
        }}></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t("home.cta.title")}
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
            {t("home.cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact">
                <motion.button
                  className="bg-white text-orange hover:bg-gray-100 border-2 border-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-poppins font-bold text-base md:text-lg transition-all duration-300 w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("home.cta.getInTouch")}
                </motion.button>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/our-projects"
                className="inline-flex items-center justify-center gap-2 text-white text-base md:text-lg font-semibold border-2 border-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white/10 transition-all duration-300 group w-full sm:w-auto"
              >
                {t("home.cta.exploreWork")}
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaArrowRight />
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
