import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaExternalLinkAlt, FaShieldAlt, FaUsers, FaLaptop } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";
import { webinar } from "../assets/images";

// When false: page is normal again. Also uncomment Events in Menu.jsx and constants/index.js navLinks.
const EVENTS_PAGE_BLURRED = true;

const Events = () => {
  const { t } = useTranslation();

  // Upcoming events data
  const upcomingEvents = [
    {
      id: 1,
      title: "PROTECTING PEOPLE BY PROTECTING DATA: Practical Lessons from PDA's Work in Ethical Research and MEL",
      subtitle: "PDA Webinar Series",
      theme: "Data Protection",
      date: "Thursday, 26th March 2026",
      time: "10:00 AM - 12:00 Noon (GMT)",
      location: "Online",
      registrationUrl: "https://bit.ly/PDADataProtection",
      image: webinar,
      description: "Join us for an insightful webinar where we share practical lessons from PDA's work in ethical research and Monitoring, Evaluation, and Learning (MEL). Learn about data protection best practices and how to ensure ethical standards in research and evaluation work.",
      category: "Webinar",
      featured: true,
    },
  ];

  const EventCard = ({ event, index }) => {
    return (
      <motion.div
        className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-orange"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        whileHover={{ scale: 1.02, y: -5 }}
      >
        {/* Event Image */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/800x400?text=PDA+Event";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          {/* Theme Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-4 py-2 bg-amber-700/90 text-white rounded-lg text-sm font-semibold flex items-center gap-2">
              <FaShieldAlt className="text-xs" />
              {event.theme}
            </span>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <span className="px-4 py-2 bg-orange text-white rounded-lg text-sm font-semibold">
              {event.category}
            </span>
          </div>

          {/* Featured Badge */}
          {event.featured && (
            <div className="absolute bottom-4 left-4">
              <span className="px-4 py-2 bg-orange text-white rounded-lg text-sm font-semibold">
                Featured Event
              </span>
            </div>
          )}
        </div>

        {/* Event Content */}
        <div className="p-6 md:p-8">
          {/* Series Title */}
          <p className="text-orange font-semibold text-sm md:text-base mb-2">
            {event.subtitle}
          </p>

          {/* Main Title */}
          <h3 className="font-bold text-xl md:text-2xl lg:text-3xl text-gray-800 mb-4 leading-tight">
            {event.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            {event.description}
          </p>

          {/* Event Details */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-gray-700">
              <FaCalendarAlt className="text-orange text-lg flex-shrink-0" />
              <span className="text-sm md:text-base font-medium">{event.date}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <FaClock className="text-orange text-lg flex-shrink-0" />
              <span className="text-sm md:text-base font-medium">{event.time}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <FaMapMarkerAlt className="text-orange text-lg flex-shrink-0" />
              <span className="text-sm md:text-base font-medium">{event.location}</span>
            </div>
          </div>

          {/* Registration Button */}
          <motion.a
            href={event.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-r from-orange to-orange/85 text-white font-bold py-4 px-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>REGISTER TO JOIN</span>
            <FaExternalLinkAlt className="text-sm" />
          </motion.a>
        </div>
      </motion.div>
    );
  };

  return (
    <section
      id="events"
      className="max-container max-w-full w-full min-h-screen font-poppins bg-gradient-to-b from-gray-50 to-white relative"
    >
      <div
        className={EVENTS_PAGE_BLURRED ? "blur-md pointer-events-none select-none" : ""}
        aria-hidden={EVENTS_PAGE_BLURRED}
      >
      {/* Hero Section */}
      <motion.div
        className="relative w-full mt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={webinar}
          className="w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover"
          alt="PDA Events"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <motion.h1
          className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center absolute bottom-8 sm:bottom-10 left-0 right-0 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {t("nav.events")}
        </motion.h1>
      </motion.div>

      {/* Introduction */}
      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-ash mb-4">
          {t("events.upcomingEvents")}
        </h2>
        <p className="font-poppins text-lg md:text-xl text-gray-600 leading-relaxed">
          Join us for engaging webinars, workshops, and events where we share insights, 
          best practices, and lessons learned from our work in development, research, and evaluation.
        </p>
      </motion.div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {upcomingEvents.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <FaCalendarAlt className="text-6xl text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-600 mb-2">No Upcoming Events</h3>
            <p className="text-gray-500">Check back soon for upcoming events and webinars.</p>
          </motion.div>
        )}
      </div>

      {/* Additional Info Section */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gradient-to-br from-orange/10 to-orange/10 rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-white text-2xl" />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">Expert Speakers</h3>
              <p className="text-gray-600 text-sm">
                Learn from experienced professionals and thought leaders in development and research.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaLaptop className="text-white text-2xl" />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">Interactive Sessions</h3>
              <p className="text-gray-600 text-sm">
                Engage in discussions, Q&A sessions, and networking opportunities.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-white text-2xl" />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">Practical Insights</h3>
              <p className="text-gray-600 text-sm">
                Gain actionable knowledge and best practices from real-world experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
      </div>
      {EVENTS_PAGE_BLURRED && (
        <>
          <p className="sr-only">Events page content is temporarily unavailable.</p>
          <div
            className="absolute inset-0 z-40 bg-white/30 backdrop-blur-sm"
            aria-hidden
          />
        </>
      )}
    </section>
  );
};

export default Events;
