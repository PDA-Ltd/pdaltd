import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { useTranslation } from "../hooks/useTranslation";
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

      {/* Partner Logos */}
      <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8">
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
