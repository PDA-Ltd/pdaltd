import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCookie, FaTimes } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";
import Button from "./Button";

const CookieConsent = () => {
  const { t } = useTranslation();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already given consent or closed banner this session
    const consent = localStorage.getItem("cookieConsent");
    const bannerClosed = sessionStorage.getItem("cookieBannerClosed");
    
    if (consent || bannerClosed === "true") {
      setShowBanner(false);
    } else {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    localStorage.setItem("cookieConsentDate", new Date().toISOString());
    setShowBanner(false);
    // Here you can initialize analytics or other cookie-based services
    // Example: initializeAnalytics();
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    localStorage.setItem("cookieConsentDate", new Date().toISOString());
    setShowBanner(false);
    // Ensure analytics/services are not initialized
  };

  const handleClose = () => {
    // Close banner temporarily (will show again on next visit if no consent given)
    setShowBanner(false);
    // Hide for this session only
    sessionStorage.setItem("cookieBannerClosed", "true");
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-2xl border-t-4 border-orange"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              {/* Cookie Icon */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center">
                  <FaCookie className="text-orange text-2xl" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="font-bold text-lg text-gray-800 mb-2 font-poppins">
                  {t("cookieConsent.title")}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed font-poppins">
                  {t("cookieConsent.description")}
                </p>
                <a
                  href="/privacy-policy"
                  className="text-orange hover:text-orange/80 text-sm font-semibold mt-2 inline-block underline"
                >
                  {t("cookieConsent.learnMore")}
                </a>
              </div>

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label={t("common.close")}
              >
                <FaTimes className="text-xl" />
              </button>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto md:flex-shrink-0">
                <motion.button
                  onClick={handleDecline}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors font-poppins whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("cookieConsent.decline")}
                </motion.button>
                <motion.button
                  onClick={handleAccept}
                  className="px-6 py-3 bg-orange text-white rounded-lg font-semibold hover:bg-orange/90 transition-colors font-poppins whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("cookieConsent.accept")}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
