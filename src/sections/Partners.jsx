import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../components/Button";
import { useTranslation } from "../hooks/useTranslation";
import { partnerTestimonials } from "../data/partnersData";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  beyond,
  british,
  callund,
  cdd,
  cocoa,
  coram,
  edtech,
  euro,
  slaves,
  gain,
  initial,
  institute,
  ipsos,
  kokoo,
  mastercard,
  opm,
  pandemics,
  root,
  sabre,
  schol,
  star,
  sustainable,
  tonys,
  tzedek,
  unicef,
  university,
} from "../assets/images";

const Partners = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const partners = [
    { imgURL: beyond, name: "Beyond" },
    { imgURL: british, name: "British" },
    { imgURL: callund, name: "Callund" },
    { imgURL: cdd, name: "CDD" },
    { imgURL: cocoa, name: "Cocoa" },
    { imgURL: coram, name: "Coram" },
    { imgURL: edtech, name: "EdTech" },
    { imgURL: euro, name: "Euro" },
    { imgURL: slaves, name: "Slaves" },
    { imgURL: gain, name: "gAIN" },
    { imgURL: initial, name: "Initial" },
    { imgURL: institute, name: "Institute" },
    { imgURL: ipsos, name: "IPSOS" },
    { imgURL: kokoo, name: "Kokoo" },
    { imgURL: mastercard, name: "Mastercard" },
    { imgURL: opm, name: "OPM" },
    { imgURL: pandemics, name: "Pandemics" },
    { imgURL: root, name: "Root" },
    { imgURL: sabre, name: "Sabre" },
    { imgURL: schol, name: "Schol" },
    { imgURL: star, name: "Star" },
    { imgURL: sustainable, name: "Sustainable" },
    { imgURL: tonys, name: "Tonys" },
    { imgURL: tzedek, name: "Tzedek" },
    { imgURL: unicef, name: "Unicef" },
    { imgURL: university, name: "University" },
  ];

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentTestimonialIndex((prev) => (prev + 1) % partnerTestimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentTestimonialIndex((prev) => (prev - 1 + partnerTestimonials.length) % partnerTestimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentTestimonialIndex((prev) => (prev + 1) % partnerTestimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentTestimonialIndex]);

  const currentTestimonial = partnerTestimonials[currentTestimonialIndex];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative",
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      position: "absolute",
    }),
  };

  return (
    <section id="partners" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header - Consistent Style */}
      <motion.div
        className="text-center mb-5 md:mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
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
            Our Partners
          </motion.h2>
          <motion.div
            className="h-1 bg-orange flex-1 max-w-16 sm:max-w-24 md:max-w-32"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          />
        </div>
        <motion.p
          className="text-gray-600 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Trusted by leading organizations worldwide
        </motion.p>
      </motion.div>

      {/* Combined Section: Testimonials + Partner Logos */}
      <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8">
        {/* Compact Testimonial Section */}
        <div className="relative mb-8 pb-8 border-b border-gray-200">
          <div className="relative h-[320px] sm:h-[280px] md:h-[240px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentTestimonialIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 400, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="h-full"
              >
                <div className="flex flex-col md:flex-row items-start gap-6 h-full">
                  <div className="flex-shrink-0">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.partner}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full object-contain bg-gray-100 p-2 shadow-md"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-grow">
                    <FaQuoteLeft className="text-orange text-2xl md:text-3xl mb-3" />
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 italic line-clamp-3">
                      "{currentTestimonial.quote}"
                    </p>
                    <div>
                      <p className="font-bold text-gray-800 text-base md:text-lg mb-1">
                        {currentTestimonial.name}
                      </p>
                      <p className="text-orange font-semibold text-sm md:text-base mb-1">
                        {currentTestimonial.role}
                      </p>
                      <p className="text-gray-600 text-sm md:text-base">
                        {currentTestimonial.partner}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Compact Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white hover:bg-orange border-2 border-gray-200 hover:border-orange flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 group"
              aria-label="Previous"
            >
              <FaChevronLeft className="text-gray-600 group-hover:text-white transition-colors text-sm" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white hover:bg-orange/15 border-2 border-gray-200 hover:border-orange flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 group"
              aria-label="Next"
            >
              <FaChevronRight className="text-gray-600 group-hover:text-white transition-colors text-sm" />
            </button>

            {/* Compact Dots Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex justify-center gap-2">
              {partnerTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentTestimonialIndex ? 1 : -1);
                    setCurrentTestimonialIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonialIndex
                      ? "bg-orange w-6"
                      : "bg-gray-300 hover:bg-gray-400 w-2"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Partner Logos Carousel */}
        <div>
          <div className="flex overflow-hidden group justify-center py-4">
            <div className="flex animate-loop-scroll space-x-8 group-hover:paused relative">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                >
                  <motion.img
                    src={partner.imgURL}
                    alt={partner.name}
                    className="w-16 h-16 md:w-20 md:h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              ))}
              {partners.map((partner, index) => (
                <motion.div
                  key={index + partners.length}
                  className="flex-shrink-0"
                >
                  <motion.img
                    src={partner.imgURL}
                    alt={partner.name}
                    className="w-16 h-16 md:w-20 md:h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* View More Button */}
        <motion.div
          className="flex justify-center mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Button
            label={t("partnersPage.viewMore")}
            onClick={() => navigate("/partners")}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
