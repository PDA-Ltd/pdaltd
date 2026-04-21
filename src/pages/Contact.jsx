import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { contactimage, communication } from "../assets/images";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFax, FaDownload } from "react-icons/fa";
import Button from "../components/Button";
import ContactOfficesMap, { contactOfficeLocations } from "../components/ContactOfficesMap";
import { useTranslation } from "../hooks/useTranslation";

const Contact = () => {
  const { t } = useTranslation();
  const contactFormRecipients = "info@pdaghana.com,amensah@pdaghana.com,gmyamoah@pdaghana.com";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Organization: ${formData.organization}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Message:\n${formData.message}`
    );

    // For now, use mailto (can be replaced with backend API later)
    window.location.href = `mailto:${contactFormRecipients}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", organization: "", phone: "", message: "" });
    }, 1000);
  };

  const contactInfo = useMemo(() => [
    {
      icon: FaMapMarkerAlt,
      title: t("contact.accraOffice"),
      details: [
        {
          label: t("contact.physicalAddress"),
          value: "No. 30, Asafoatse Oman Street (Near Accra Central View Hotel and ATTC), Kokomlemle, Accra",
        },
        {
          label: t("contact.postalAddress"),
          value: "P.O. Box AN 18233, Accra North, Ghana",
        },
        {
          label: t("contact.gpsCode"),
          value: "GA0472784",
          link: "https://www.ghanapostgps.com/map/#GA0472784",
        },
      ],
    },
    {
      icon: FaMapMarkerAlt,
      title: t("contact.kumasiOffice"),
      details: [
        {
          label: t("contact.gpsCode"),
          value: "AK-849-3514",
          link: "https://www.ghanapostgps.com/map/#AK8493514",
        },
        {
          label: t("contact.physicalAddress"),
          value: "Anwomaso Rd, Kumasi",
        },
        {
          label: t("contact.postalAddress"),
          value: "P.O. Box UP 876, K.N.U.S.T, Kumasi, Ghana",
        },
      ],
    },
  ], [t]);

  const unitContacts = useMemo(() => [
    { unit: t("contact.units.rel"), contact: "Alexander Afram", phone: "+233 508 500 351" },
    { unit: t("contact.units.advocacy"), contact: "Aseda Mensah", phone: "+233 508 493 316" },
    { unit: t("contact.units.pdaAfrica"), contact: "David Eshun", phone: "+233 508 493 223" },
    { unit: t("contact.units.admin"), contact: "Patricia Zingle", phone: "+233 509 229 218" },
  ], [t]);

  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24"
    >
      {/* Hero Section */}
      <motion.div
        className="relative w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={contactimage}
          alt="Contact Us"
          className="w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <motion.img
            src={communication}
            alt="Communication"
            className="h-20 w-20 mx-auto mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          />
          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-poppins mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Have a project for us?
          </motion.p>
          <motion.h3
            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-poppins"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Let's discuss it!
          </motion.h3>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-orange mb-6 font-poppins">{t("contact.form.title")}</h2>
            <p className="text-gray-600 mb-6 font-poppins">
              Thank you for your interest in learning more about us. Your contact information will enable us to respond to all your concerns.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 font-poppins">
                  {t("common.name")} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange focus:outline-none transition-colors font-poppins"
                  placeholder={t("common.name")}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 font-poppins">
                  {t("common.email")} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange focus:outline-none transition-colors font-poppins"
                  placeholder={t("common.email")}
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 mb-2 font-poppins">
                  {t("common.organization")}
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange focus:outline-none transition-colors font-poppins"
                  placeholder={t("common.organization")}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2 font-poppins">
                  {t("common.phone")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange focus:outline-none transition-colors font-poppins"
                  placeholder="+233 XX XXX XXXX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 font-poppins">
                  {t("common.message")} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange focus:outline-none transition-colors font-poppins resize-none"
                  placeholder={t("common.message")}
                ></textarea>
              </div>

              {submitStatus === "success" && (
                <motion.div
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {t("contact.form.success")}
                </motion.div>
              )}

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  type="submit"
                  label={isSubmitting ? t("common.loading") : t("contact.form.submit")}
                  disabled={isSubmitting}
                />
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Office Addresses */}
            {contactInfo.map((office, index) => {
              const Icon = office.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-orange p-3 rounded-full">
                      <Icon className="text-white text-xl" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 font-poppins">{office.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {office.details.map((detail, idx) => (
                      <div key={idx}>
                        <p className="font-semibold text-gray-700 mb-1 font-poppins">{detail.label}</p>
                        {detail.link ? (
                          <a
                            href={detail.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange hover:underline font-poppins"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-gray-600 font-poppins">{detail.value}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}

            {/* Contact Numbers */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange p-3 rounded-full">
                  <FaPhone className="text-white text-xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 font-poppins">Contact Numbers</h3>
              </div>
              <div className="space-y-3">
                <a href="tel:+233508493316" className="block text-gray-600 hover:text-orange transition-colors font-poppins">
                  +233 (0) 50 849 3316
                </a>
                <a href="tel:+233509229218" className="block text-gray-600 hover:text-orange transition-colors font-poppins">
                  +233 (0) 50 922 9218
                </a>
                <p className="text-gray-600 font-poppins">
                  <span className="font-semibold">Fax:</span> +233 (0) 32 2061092
                </p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange p-3 rounded-full">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 font-poppins">Email</h3>
              </div>
              <a
                href="mailto:info@pdaghana.com"
                className="text-orange hover:underline font-poppins text-lg"
              >
                info@pdaghana.com
              </a>
            </motion.div>

            {/* Unit Contacts */}
            <motion.div
              className="bg-gradient-to-br from-orange/10 to-orange/10 rounded-2xl shadow-xl p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4 font-poppins">Unit Contacts</h3>
              <div className="space-y-3">
                {unitContacts.map((unit, index) => (
                  <div key={index} className="border-l-4 border-orange pl-4">
                    <p className="font-semibold text-gray-800 font-poppins">{unit.unit}</p>
                    <p className="text-gray-600 font-poppins">{unit.contact}</p>
                    <a
                      href={`tel:${unit.phone.replace(/\s/g, "")}`}
                      className="text-orange hover:underline font-poppins"
                    >
                      {unit.phone}
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Interactive office map */}
        <motion.div
          className="mt-16 md:mt-24"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-poppins text-center mb-3">
            {t("contact.mapTitle")}
          </h2>
          <p className="text-center text-gray-600 font-poppins text-sm sm:text-base max-w-2xl mx-auto mb-5 px-2">
            {t("contact.mapSubtitle")}
          </p>
          <ContactOfficesMap t={t} />
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6">
            {contactOfficeLocations.map((office) => (
              <a
                key={office.id}
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${office.address}, Ghana`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange font-semibold font-poppins text-sm hover:underline inline-flex items-center gap-1"
              >
                {t(office.titleKey)}
                <span className="text-gray-500 font-normal">— {t("contact.mapOpenInMaps")}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
