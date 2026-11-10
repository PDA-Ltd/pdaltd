import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaExternalLinkAlt, FaShieldAlt, FaUsers, FaLaptop } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";
import { webinar, ksw9 } from "../assets/images";

// Set to true to hide the page again (blurs the content and overlays it).
// If you do, also comment out the Events entries in Menu.jsx and constants/index.js navLinks.
const EVENTS_PAGE_BLURRED = false;

const Events = () => {
  const { t, language } = useTranslation();
  const fr = language === "fr";

  // Upcoming events data
  const upcomingEvents = [
    {
      id: 2,
      title: fr
        ? "9e Atelier de partage des connaissances sur la protection de l’enfance"
        : "9th Knowledge Sharing Workshop on Child Protection",
      subtitle: fr
        ? "PDA Africa, le Département de l’enfance (MoGCSP) et la Ghana Internet Safety Foundation (GISF)"
        : "PDA Africa, the Department of Children (MoGCSP) and the Ghana Internet Safety Foundation (GISF)",
      theme: fr
        ? "Avenirs numériques : identité, sécurité numérique et avenir de la protection de l’enfance au Ghana"
        : "Digital Futures: Identity, Digital Safety and the Future of Child Protection in Ghana",
      date: fr ? "Jeudi 3 décembre 2026" : "Thursday, 3 December 2026",
      time: fr
        ? "Accueil dès 9h30 ; programme de 10h00 à 15h30"
        : "Registration from 9:30 AM; programme 10:00 AM – 3:30 PM",
      location: "British Council, Accra",
      registrationUrl: "https://bit.ly/PDAksw9",
      conceptNoteUrl:
        "/assets/documents/9th-Knowledge-Sharing-Workshop-on-Child-Protection-Concept-Note.pdf",
      image: ksw9,
      description: fr
        ? "Chaque enfant compte. Chaque enfant a droit à la protection. Les systèmes ghanéens de protection de l’enfance suivent-ils le rythme d’un monde numérique en mutation rapide ? De l’enregistrement des naissances et de l’identité légale à l’intelligence artificielle, à la sécurité en ligne et aux nouveaux risques cyber, les défis auxquels les enfants font face évoluent. Que vous travailliez dans la protection de l’enfance, l’éducation, la technologie, les politiques publiques ou le développement communautaire, prenez part à la conversation qui façonne la protection de l’enfance au Ghana."
        : "Every child counts. Every child deserves protection. Are Ghana's child protection systems keeping pace with a rapidly changing digital world? From birth registration and legal identity to AI, online safety and emerging cyber risks, the challenges facing children are evolving. Whether you work in child protection, education, technology, policy or community development, be part of the conversation shaping child protection in Ghana.",
      sessions: fr
        ? [
            "Session 1 — Chaque enfant compte : l’enregistrement des naissances, l’identité légale et le droit d’exister aux yeux de la loi. Les obstacles à un enregistrement rapide, le lien entre les établissements de santé et l’état civil, l’accès aux droits et aux services, et l’avenir de l’identité.",
            "Session 2 — Grandir à l’ère du numérique : l’intelligence artificielle, la sécurité en ligne et les nouveaux risques cyber pour les enfants. Les données et la vie privée des enfants, le bien-être numérique, le rôle des parents, des écoles et des institutions, et la question de ceux que l’on laisse de côté.",
            "Format : présentations, documentaire court, tables rondes en petits groupes, discussion en panel et stands d’exposition.",
          ]
        : [
            "Session 1 — Every Child Counts: birth registration, legal identity and the right to belong. Barriers to timely registration, the link between health facilities and registration, access to rights and services, and the future of identity.",
            "Session 2 — Growing Up Digital: AI, online safety and emerging cyber risks for children. Children's data and privacy, digital wellbeing, the role of parents, schools and institutions, and who is being left behind.",
            "Format: presentations, a short documentary, facilitated roundtable group work, a panel discussion and exhibition stands.",
          ],
      category: fr ? "Protection de l’enfance" : "Child Protection",
      featured: true,
    },
  ];

  // Events that have already taken place.
  const pastEvents = [
    {
      id: 1,
      title: fr
        ? "PROTÉGER LES PERSONNES EN PROTÉGEANT LES DONNÉES : enseignements pratiques des travaux du PDA en recherche éthique et en SEA"
        : "PROTECTING PEOPLE BY PROTECTING DATA: Practical Lessons from PDA's Work in Ethical Research and MEL",
      subtitle: fr ? "Série de webinaires du PDA" : "PDA Webinar Series",
      theme: fr ? "Protection des données" : "Data Protection",
      date: fr ? "Jeudi 26 mars 2026" : "Thursday, 26th March 2026",
      time: fr ? "10h00 – 12h00 (GMT)" : "10:00 AM - 12:00 Noon (GMT)",
      location: fr ? "En ligne" : "Online",
      image: webinar,
      description: fr
        ? "Un webinaire consacré aux enseignements pratiques tirés des travaux du PDA en matière de recherche éthique et de suivi, évaluation et apprentissage (SEA), et aux bonnes pratiques de protection des données dans les travaux de recherche et d’évaluation."
        : "An insightful webinar sharing practical lessons from PDA's work in ethical research and Monitoring, Evaluation, and Learning (MEL), including data protection best practices and how to ensure ethical standards in research and evaluation work.",
      category: fr ? "Webinaire" : "Webinar",
    },
  ];

  const EventCard = ({ event, index, isPast = false }) => {
    return (
      <motion.div
        className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 ${
          isPast ? "border-gray-300" : "border-orange"
        }`}
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
            className={`w-full h-full object-cover ${isPast ? "grayscale" : ""}`}
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

          {/* Featured / Ended Badge */}
          {(event.featured || isPast) && (
            <div className="absolute bottom-4 left-4">
              <span
                className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                  isPast ? "bg-gray-700 text-white" : "bg-orange text-white"
                }`}
              >
                {isPast ? t("events.eventEnded") : t("events.featuredEvent")}
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

          {/* Sessions */}
          {event.sessions?.length > 0 && (
            <div className="mb-6">
              <p className="font-semibold text-gray-800 text-sm md:text-base mb-3">
                {t("events.sessionsTitle")}
              </p>
              <ul className="space-y-2">
                {event.sessions.map((session, i) => (
                  <li key={i} className="flex gap-3 text-gray-600 text-sm md:text-base">
                    <span className="text-orange font-bold flex-shrink-0">•</span>
                    <span>{session}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

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

          {/* Registration Button — only while the event is still upcoming */}
          {!isPast && event.registrationUrl && (
            <motion.a
              href={event.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-orange to-orange/85 text-white font-bold py-4 px-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{t("events.register")}</span>
              <FaExternalLinkAlt className="text-sm" />
            </motion.a>
          )}

          {/* Secondary link — concept note, agenda, recording */}
          {!isPast && event.conceptNoteUrl && (
            <a
              href={event.conceptNoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full border-2 border-orange text-orange font-semibold py-3 px-6 rounded-lg text-center hover:bg-orange/5 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <span>{t("events.conceptNote")}</span>
              <FaExternalLinkAlt className="text-xs" />
            </a>
          )}
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
          src={ksw9}
          className="w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover object-top"
          alt={t("nav.events")}
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
          {t("events.intro")}
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
            <h3 className="text-2xl font-bold text-gray-600 mb-2">{t("events.noUpcoming")}</h3>
            <p className="text-gray-500">{t("events.noUpcomingMessage")}</p>
          </motion.div>
        )}
      </div>

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div
            className="max-w-4xl mx-auto mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-ash mb-4">
              {t("events.pastEvents")}
            </h2>
            <p className="font-poppins text-base md:text-lg text-gray-600 leading-relaxed">
              {t("events.pastEventsIntro")}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-8">
            {pastEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} isPast />
            ))}
          </div>
        </div>
      )}

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
              <h3 className="font-bold text-xl text-gray-800 mb-2">{t("events.expertSpeakers")}</h3>
              <p className="text-gray-600 text-sm">{t("events.expertSpeakersText")}</p>
            </motion.div>

            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaLaptop className="text-white text-2xl" />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">
                {t("events.interactiveSessions")}
              </h3>
              <p className="text-gray-600 text-sm">{t("events.interactiveSessionsText")}</p>
            </motion.div>

            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-white text-2xl" />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">
                {t("events.practicalInsights")}
              </h3>
              <p className="text-gray-600 text-sm">{t("events.practicalInsightsText")}</p>
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
