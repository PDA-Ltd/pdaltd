import React, { useState } from "react";
import { motion } from "framer-motion";
import NewButton from "./NewButton";
import { FaEnvelope, FaCheckCircle } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";

const NewsletterForm = () => {
  const { t, currentLanguage } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Previous approach — opened the visitor's own email client via a mailto: link.
  // Kept for reference in case we ever need to fall back to it.
  // const newsletterRecipients = "info@pdaghana.com,amensah@pdaghana.com,gmyamoah@pdaghana.com";
  // const handleSubmitMailto = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   setSubmitStatus(null);
  //
  //   const subject = encodeURIComponent(t("publications.signUpToday"));
  //   const body = encodeURIComponent(
  //     `${t("publications.signUpToday")}\n\n` +
  //     `${t("common.name")}: ${formData.name}\n` +
  //     `${t("common.email")}: ${formData.email}\n` +
  //     `${t("common.organization")}: ${formData.organization}\n` +
  //     `${t("common.phone")}: ${formData.contact}\n\n` +
  //     `Please add this person to the newsletter mailing list.`
  //   );
  //
  //   window.location.href = `mailto:${newsletterRecipients}?subject=${subject}&body=${body}`;
  //
  //   setTimeout(() => {
  //     setIsSubmitting(false);
  //     setSubmitStatus("success");
  //     setFormData({ name: "", email: "", organization: "", contact: "" });
  //   }, 1000);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/newsletter-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          organization: formData.organization,
        }),
      });

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      setSubmitStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", organization: "" });
    } catch (err) {
      console.error("Newsletter signup error:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="newsletter-firstName" className="block text-sm font-semibold text-gray-700 mb-2 font-poppins">
            {t("common.firstName")} *
          </label>
          <input
            type="text"
            id="newsletter-firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-orange focus:outline-none transition-colors font-poppins"
            placeholder={t("common.firstName")}
          />
        </div>

        <div>
          <label htmlFor="newsletter-lastName" className="block text-sm font-semibold text-gray-700 mb-2 font-poppins">
            {t("common.lastName")} *
          </label>
          <input
            type="text"
            id="newsletter-lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-orange focus:outline-none transition-colors font-poppins"
            placeholder={t("common.lastName")}
          />
        </div>

        <div>
          <label htmlFor="newsletter-email" className="block text-sm font-semibold text-gray-700 mb-2 font-poppins">
            {t("common.email")} *
          </label>
          <input
            type="email"
            id="newsletter-email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-orange focus:outline-none transition-colors font-poppins"
            placeholder={t("common.email")}
          />
        </div>

        <div>
          <label htmlFor="newsletter-organization" className="block text-sm font-semibold text-gray-700 mb-2 font-poppins">
            {t("common.organization")}
          </label>
          <input
            type="text"
            id="newsletter-organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-orange focus:outline-none transition-colors font-poppins"
            placeholder={t("common.organization")}
          />
        </div>
      </div>

      {submitStatus === "success" && (
        <motion.div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <FaCheckCircle />
          <span className="font-poppins">{t("publications.subscriptionSuccess")}</span>
        </motion.div>
      )}

      {submitStatus === "error" && (
        <motion.div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-poppins">
            {currentLanguage === "fr"
              ? "Une erreur s'est produite. Veuillez réessayer plus tard."
              : "Something went wrong. Please try again later."}
          </span>
        </motion.div>
      )}

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <button
          type="submit"
          disabled={isSubmitting}
          className="justify-center items-center px-7 py-3 border font-poppins text-base leading-none bg-orange text-white font-bold border-none max-sm:text-sm max-sm:px-4 max-sm:py-2 hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? t("common.loading") : t("publications.signUpToday").toUpperCase()}
        </button>
      </motion.div>
    </motion.form>
  );
};

export default NewsletterForm;
