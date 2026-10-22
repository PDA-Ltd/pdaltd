import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaEnvelope, FaCheckCircle } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";

const MailingListPopup = ({ isOpen, onClose }) => {
  const { t, currentLanguage } = useTranslation();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    if (!isOpen) return;

    const onEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [isOpen, onClose]);

  // The popup stays mounted between openings, so clear previous state on close.
  useEffect(() => {
    if (isOpen) return;
    setEmail("");
    setIsSubmitting(false);
    setSubmitStatus(null);
  }, [isOpen]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/newsletter-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      setSubmitStatus("success");
      setEmail("");
      // Give the subscriber a moment to see the confirmation before it closes.
      window.setTimeout(onClose, 2500);
    } catch (err) {
      console.error("Mailing list signup error:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[120] bg-black/55 backdrop-blur-sm flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-lg rounded-2xl bg-white p-6 md:p-8 shadow-2xl"
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 p-2 text-gray-500 hover:text-orange/80 transition-colors"
              aria-label="Close subscription popup"
            >
              <FaTimes />
            </button>

            <div className="mb-5">
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-wide font-semibold text-orange bg-orange/10 px-3 py-1 rounded-full">
                <FaEnvelope />
                Stay Updated
              </p>
              <h3 className="mt-4 text-2xl font-bold text-ash leading-tight">
                Join our mailing list
              </h3>
              <p className="mt-2 text-gray-600">
                Get the latest PDA updates, publications, and event highlights directly in your inbox.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <label htmlFor="mailing-list-email" className="sr-only">
                Email address
              </label>
              <input
                id="mailing-list-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 focus:outline-none focus:border-orange"
                placeholder="Enter your email address"
              />

              {submitStatus === "success" && (
                <motion.div
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <FaCheckCircle />
                  <span>{t("publications.subscriptionSuccess")}</span>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {currentLanguage === "fr"
                    ? "Une erreur s'est produite. Veuillez réessayer plus tard."
                    : "Something went wrong. Please try again later."}
                </motion.div>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 rounded-lg bg-orange text-white font-semibold py-3 hover:bg-orange/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t("common.loading") : "Subscribe"}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 rounded-lg border border-gray-300 text-gray-700 font-semibold py-3 hover:bg-gray-100 transition-colors"
                >
                  Maybe later
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MailingListPopup;
