import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";
import { Link } from "react-router-dom";

const WhatWeDoSlider = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const services = useMemo(() => [
    {
      number: "01",
      title: t("whatWeDo.services.research.title"),
      description: t("whatWeDo.services.research.description"),
      accent: "orange",
      position: "left",
    },
    {
      number: "02",
      title: t("whatWeDo.services.impact.title"),
      description: t("whatWeDo.services.impact.description"),
      accent: "orange",
      position: "right",
    },
    {
      number: "03",
      title: t("whatWeDo.services.synthesis.title"),
      description: t("whatWeDo.services.synthesis.description"),
      accent: "orange",
      position: "left",
    },
    {
      number: "04",
      title: t("whatWeDo.services.learning.title"),
      description: t("whatWeDo.services.learning.description"),
      accent: "orange",
      position: "right",
    },
  ], [t]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  // Auto-slide
  React.useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [services.length]);

  const currentService = services[currentIndex];
  const isEven = currentIndex % 2 === 0;

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 50px,
            rgba(248, 152, 35, 0.1) 50px,
            rgba(248, 152, 35, 0.1) 100px
          )`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Minimalist */}
        <motion.div
          className="mb-5 md:mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 sm:gap-4 mb-3 justify-center">
            <motion.div
              className="h-1 bg-orange flex-1 max-w-16 sm:max-w-24 md:max-w-32"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            />
            <motion.h2
              className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              What We Do
            </motion.h2>
            <motion.div
              className="h-1 bg-orange flex-1 max-w-16 sm:max-w-24 md:max-w-32"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            />
          </div>
        </motion.div>

        {/* Slider Container */}
        <div className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className={`absolute inset-0 flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
            >
              {/* Large Number Background */}
              <motion.div
              className={`relative w-full md:w-2/5 h-[250px] sm:h-[300px] md:h-[500px] flex items-center justify-center overflow-hidden ${
                currentService.accent === "orange" ? "bg-orange/5" : "bg-orange/8"
              }`}
                style={{
                  clipPath: isEven 
                    ? "polygon(0 0, 100% 0, 85% 100%, 0 100%)"
                    : "polygon(15% 0, 100% 0, 100% 100%, 0 100%)"
                }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Diagonal Accent Line */}
                <motion.div
                  className={`absolute inset-0 ${
                    currentService.accent === "orange" ? "bg-orange" : "bg-orange/90"
                  }`}
                  style={{
                    clipPath: isEven
                      ? "polygon(0 0, 20% 0, 0 20%)"
                      : "polygon(100% 0, 100% 20%, 80% 0)"
                  }}
                  initial={{ opacity: 0.1 }}
                  animate={{ opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                {/* Large Number */}
                <motion.div
                  className="relative z-10"
                  initial={{ scale: 0.8, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <span
                    className={`text-[120px] sm:text-[180px] md:text-[280px] lg:text-[380px] font-black leading-none select-none tracking-tight ${
                      currentService.accent === "orange"
                        ? "text-orange/35 sm:text-orange/40"
                        : "text-orange/40 sm:text-orange/45"
                    }`}
                  >
                    {currentService.number}
                  </span>
                </motion.div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                className="w-full md:w-3/5 text-black space-y-6"
                initial={{ x: isEven ? -50 : 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {/* Title with Underline */}
                <div className="relative">
                  <motion.h3
                    className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 ${
                      currentService.accent === "orange" ? "text-orange" : "text-orange/90"
                    }`}
                    initial={{ letterSpacing: "0.2em", opacity: 0 }}
                    animate={{ letterSpacing: "0em", opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    {currentService.title}
                  </motion.h3>
                  <motion.div
                    className={`h-1 ${
                      currentService.accent === "orange" ? "bg-orange" : "bg-orange/90"
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  />
                </div>

                {/* Description */}
                <motion.p
                  className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {currentService.description}
                </motion.p>

                {/* Decorative Element */}
                <motion.div
                  className="flex items-center gap-4 mt-8"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className={`h-0.5 w-16 ${
                    currentService.accent === "orange" ? "bg-orange" : "bg-orange/90"
                  }`} />
                  <span className={`text-sm font-bold uppercase tracking-wider ${
                    currentService.accent === "orange" ? "text-orange" : "text-orange/90"
                  }`}>
                    Service {currentService.number}
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/90 hover:bg-white border-2 border-gray-200 hover:border-orange flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
            aria-label="Previous"
          >
            <FaChevronLeft className="text-gray-600 group-hover:text-orange transition-colors text-base sm:text-lg md:text-xl" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/90 hover:bg-white border-2 border-gray-200 hover:border-orange flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
            aria-label="Next"
          >
            <FaChevronRight className="text-gray-600 group-hover:text-orange/80 transition-colors text-base sm:text-lg md:text-xl" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? services[index].accent === "orange"
                      ? "bg-orange w-8"
                      : "bg-orange/90 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 md:mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Link
            to="/what-we-do"
            className="group inline-flex items-center gap-4 text-black hover:text-orange transition-colors duration-300"
          >
            <span className="text-lg md:text-xl font-semibold uppercase tracking-wider">
              Explore All Services
            </span>
            <motion.div
              className="w-12 h-12 rounded-full border-2 border-black group-hover:border-orange flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 45 }}
              transition={{ duration: 0.3 }}
            >
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </motion.svg>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoSlider;
