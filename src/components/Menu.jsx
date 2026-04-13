import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { search } from "../assets/icons";
import { navLinks as baseNavLinks, navigation as baseNavigation, socialMedia } from "../constants";
import Button from "./Button";
import SearchModal from "./SearchModal";
import { useTranslation } from "../hooks/useTranslation";
import { FaChevronDown, FaChevronUp, FaExternalLinkAlt } from "react-icons/fa";

const Menu = ({ onLinkClick }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const navigate = useNavigate();
  const { t } = useTranslation();

  const toggleSection = (sectionTitle) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle],
    }));
  };

  // Generate translated navigation
  const navLinks = useMemo(() => [
    { href: "/", label: t("nav.home") },
    { href: "/ethical-review-committee", label: t("nav.ethicalReviewCommittee") },
    { href: "/child-abuse-tracker", label: t("nav.childAbuseTracker") },
    { href: "/covid-19", label: t("nav.covid19") },
    { href: "/partners", label: t("nav.partners") },
    { href: "/events", label: t("nav.events") },
    { href: "https://pdaafrica.org", label: "PDA Africa", external: true, isSubOrg: true },
  ], [t]);

  const navigation = useMemo(() => [
    {
      title: t("nav.whoWeAre"),
      link: "/who-we-are",
      links: [
        { name: t("nav.vision"), link: "/who-we-are#vision" },
        { name: t("nav.mission"), link: "/who-we-are#mission" },
        { name: t("nav.teams"), link: "/teams" },
        { name: t("nav.board"), link: "/board" },
        { name: t("nav.staff"), link: "/staff" },
      ],
    },
    {
      title: t("nav.whatWeDo"),
      link: "/what-we-do",
      links: [
        { name: t("nav.strategicObjectives"), link: "/what-we-do#strategic-objectives" },
        { name: t("nav.ourProjects"), link: "/our-projects" },
        { name: t("nav.expertise"), link: "/what-we-do#expertise" },
      ],
    },
    {
      title: t("nav.resources"),
      link: "/publications",
      links: [
        { name: t("nav.publications"), link: "/publications" },
        { name: t("common.newsAndActivities"), link: "/news-and-activities" },
        { name: t("nav.podcastAndVodcast"), link: "/podcast-and-vodcast" },
        { name: t("nav.videos"), link: "/videos" },
        { name: t("nav.photos"), link: "/photos" },
      ],
    },
    // Restore with Our Impact route in main.jsx
    // {
    //   title: t("nav.impact"),
    //   link: "/our-impact",
    //   links: [
    //     { name: t("ourImpact.policies.title"), link: "/our-impact#policies" },
    //     { name: t("ourImpact.practices.title"), link: "/our-impact#practices" },
    //     { name: t("ourImpact.systems.title"), link: "/our-impact#systems" },
    //   ],
    // },
  ], [t]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    if (href.startsWith("#")) {
      // Handle hash links
      const hash = href.substring(1);
      if (hash === "events") {
        // Navigate to home and scroll to section
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      navigate(href);
    }
    onLinkClick();
  };

  return (
    <>
      <section className="max-container flex flex-col lg:flex-row justify-between p-4 sm:p-6 md:p-8 lg:p-10 gap-6 md:gap-7 lg:gap-10 xl:gap-12 overflow-y-auto max-h-[calc(100vh-100px)] pb-20 md:pb-24 lg:pb-24">
        {/* Mobile & Tablet Layout */}
        <div className="lg:hidden w-full space-y-6 md:space-y-7">
          {/* Top Action Buttons - Mobile & Tablet */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pb-4 md:pb-5 border-b border-gray-200">
            <motion.button
              onClick={() => setIsSearchOpen(true)}
              className="flex-1 bg-orange hover:bg-orange/90 text-white rounded-lg px-5 py-3.5 md:px-6 md:py-4 font-poppins font-semibold text-sm md:text-base lg:text-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img src={search} alt="Search Icon" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
              <span>{t("common.search").toUpperCase()}</span>
            </motion.button>
            <a
              href="/contact"
              onClick={(e) => handleLinkClick(e, "/contact")}
              className="flex-1 block"
            >
              <Button label={t("nav.contactUs")} className="w-full text-sm md:text-base" />
            </a>
          </div>

          {/* PDA Africa - Prominent Position */}
          {navLinks.filter(section => section.isSubOrg).map((section) => (
            <motion.a
              key={section.label}
              href={section.href}
              onClick={onLinkClick}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3.5 px-4 md:py-4 md:px-5 rounded-xl bg-gradient-to-r from-orange to-orange/90 text-white font-poppins font-bold text-base md:text-lg lg:text-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-between border-2 border-orange/20"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{section.label}</span>
              <FaExternalLinkAlt className="text-sm md:text-base lg:text-lg" />
            </motion.a>
          ))}

          {/* Quick Links - Mobile & Tablet */}
          <div className="space-y-1">
            <h3 className="font-poppins font-semibold text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-3 md:mb-4">
              Quick Links
            </h3>
            <div className="space-y-1">
              {navLinks.filter(section => !section.isSubOrg).map((section) => (
                section.external ? (
                  <motion.a
                    key={section.label}
                    href={section.href}
                    onClick={onLinkClick}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-poppins text-base md:text-lg font-medium text-black">
                        {section.label}
                      </span>
                      <FaExternalLinkAlt className="text-xs text-gray-400" />
                    </div>
                  </motion.a>
                ) : (
                  <a
                    key={section.label}
                    href={section.href}
                    onClick={(e) => handleLinkClick(e, section.href)}
                    className="block py-2.5 px-4 rounded-lg hover:bg-gray-50 hover:text-orange transition-colors duration-200"
                  >
                    <span className="font-poppins text-base text-black font-medium">
                      {section.label}
                    </span>
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Navigation Sections - Mobile & Tablet (Collapsible) */}
          <div className="space-y-4 md:space-y-5">
            {navigation.map((section) => (
              <div key={section.title} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="w-full flex items-center justify-between py-4 md:py-5 px-4 md:px-5 bg-gray-50 hover:bg-orange/10 transition-colors duration-200"
                >
                  <a
                    href={section.link === "#" ? "#" : section.link}
                    onClick={(e) => {
                      if (section.link !== "#") {
                        e.stopPropagation();
                        handleLinkClick(e, section.link);
                      } else {
                        e.preventDefault();
                        e.stopPropagation();
                      }
                    }}
                    className="font-poppins text-base md:text-lg font-semibold text-black flex-1 text-left"
                  >
                    {section.title}
                  </a>
                  {expandedSections[section.title] ? (
                    <FaChevronUp className="text-gray-400 text-sm md:text-base" />
                  ) : (
                    <FaChevronDown className="text-gray-400 text-sm md:text-base" />
                  )}
                </button>
                <AnimatePresence>
                  {expandedSections[section.title] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <ul className="py-2 space-y-1 bg-white">
                        {section.links.map((link) => (
                          <li key={link.name} className="break-words">
                            <a
                              href={link.link}
                              onClick={(e) => handleLinkClick(e, link.link)}
                              className="block py-2.5 md:py-3 px-6 md:px-7 font-poppins text-sm md:text-base text-gray-700 hover:text-orange hover:bg-orange/10 transition-colors duration-200 leading-relaxed"
                            >
                              <span className="break-words inline-block">{link.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Social Media - Mobile & Tablet */}
          <div className="pt-4 md:pt-5 border-t border-gray-200">
            <h3 className="font-poppins font-semibold text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-3 md:mb-4">
              Follow Us
            </h3>
            <div className="flex gap-4 md:gap-5">
              {socialMedia.map((icon) => (
                <motion.a
                  key={icon.alt}
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onLinkClick}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 hover:bg-orange flex items-center justify-center transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={icon.src} alt={icon.alt} width={20} height={20} className="md:w-6 md:h-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex lg:flex-row justify-between w-full gap-8 xl:gap-12 2xl:gap-16">
          {/* Main Navigation Links */}
          <div className="flex flex-col text-orange gap-5 lg:gap-6 xl:gap-8 font-semibold text-base lg:text-lg xl:text-xl font-poppins min-w-[220px] xl:min-w-[240px]">
            {navLinks.filter(section => !section.isSubOrg).map((section) => (
              section.external ? (
                <motion.a
                  key={section.label}
                  href={section.href}
                  onClick={onLinkClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button label={section.label} />
                </motion.a>
              ) : (
                <motion.a
                  key={section.label}
                  href={section.href}
                  onClick={(e) => handleLinkClick(e, section.href)}
                  className="hover:text-orange transition-colors duration-300 py-1"
                  whileHover={{ x: 5 }}
                >
                  {section.label}
                </motion.a>
              )
            ))}
            
            {/* PDA Africa - Special Position */}
            {navLinks.filter(section => section.isSubOrg).map((section) => (
              <motion.a
                key={section.label}
                href={section.href}
                onClick={onLinkClick}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.button
                  className="w-full px-6 py-4 border font-poppins text-base lg:text-lg leading-none bg-gradient-to-r from-orange to-orange/90 text-white font-bold border-none rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ 
                    boxShadow: "0 10px 30px rgba(248, 154, 35, 0.5)",
                  }}
                >
                  <span>{section.label}</span>
                  <FaExternalLinkAlt className="text-sm" />
                </motion.button>
              </motion.a>
            ))}
            
            <div className="flex gap-3 lg:gap-4 mt-4 pt-4 border-t border-gray-200">
              {socialMedia.map((icon) => (
                <motion.a
                  key={icon.alt}
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onLinkClick}
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gray-100 hover:bg-orange flex items-center justify-center transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={icon.src} alt={icon.alt} width={20} height={20} className="lg:w-6 lg:h-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="bg-gradient-to-b from-transparent via-orange to-transparent h-auto w-0.5 shrink-0 mx-4 xl:mx-6"></div>

          {/* 3 nav columns + Contact/Search — 4 cols, wide gaps (5th column removed with Impact) */}
          <div className="grid grid-cols-4 gap-6 lg:gap-8 xl:gap-12 2xl:gap-16 flex-1 min-w-0">
            {navigation.map((section) => (
              <div key={section.title} className="min-w-0 flex flex-col">
                <motion.a
                  href={section.link === "#" ? "#" : section.link}
                  onClick={(e) => {
                    if (section.link !== "#") {
                      handleLinkClick(e, section.link);
                    } else {
                      e.preventDefault();
                    }
                  }}
                  className="hover:text-orange transition-colors duration-300 block mb-4 lg:mb-5 xl:mb-6"
                  whileHover={{ x: 3 }}
                >
                  <h4 className="font-poppins text-black font-bold text-lg lg:text-xl xl:text-2xl 2xl:text-3xl border-b-2 border-transparent hover:border-orange pb-1.5 lg:pb-2 transition-all duration-300 break-words">
                    {section.title}
                  </h4>
                </motion.a>
                <ul className="space-y-2.5 lg:space-y-3.5">
                  {section.links.map((link) => (
                    <li
                      className="font-poppins text-sm lg:text-base xl:text-lg text-black font-normal hover:text-orange transition-colors duration-300 break-words"
                      key={link.name}
                    >
                      <motion.a
                        href={link.link}
                        onClick={(e) => handleLinkClick(e, link.link)}
                        className="block py-0.5 leading-relaxed"
                        whileHover={{ x: 3 }}
                      >
                        <span className="break-words">{link.name}</span>
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {/* Contact Us & Search Section */}
            <div className="min-w-0 xl:min-w-[140px] flex flex-col gap-3">
              <motion.button
                onClick={() => setIsSearchOpen(true)}
                className="w-full bg-orange hover:bg-orange/90 text-white rounded-lg px-4 py-3 font-poppins font-semibold text-xs lg:text-sm xl:text-base flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <img src={search} alt="Search Icon" className="w-4 h-4 lg:w-5 lg:h-5" />
                <span>{t("common.search").toUpperCase()}</span>
              </motion.button>
              <a href="/contact" onClick={(e) => handleLinkClick(e, "/contact")} className="w-full">
                <Button label={t("nav.contactUs")} className="text-xs lg:text-sm xl:text-base w-full" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Menu;
