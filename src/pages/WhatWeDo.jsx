import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { strategic, farmer } from "../assets/images";
import { map } from "../assets/images";
import Button from "../components/Button";
import { clipboard, bulb } from "../assets/icons";
import { Link, useNavigate } from "react-router-dom";
import { FaGlobe, FaHandshake, FaUsers, FaDollarSign, FaArrowRight, FaSearch, FaChartBar, FaBook, FaUsersCog, FaChevronLeft, FaChevronRight, FaMapMarkerAlt } from "react-icons/fa";
import { getProjectsForLocale } from "../components/ProjectsData";
import { useTranslation } from "../hooks/useTranslation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhatWeDo = () => {
  const [hoveredObjective, setHoveredObjective] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const navigate = useNavigate();
  const { t, language } = useTranslation();

  const leftExpertise = useMemo(() => t("whatWeDo.leftExpertise"), [t]);
  const rightExpertise = useMemo(() => t("whatWeDo.rightExpertise"), [t]);

  // Filter current projects (Active and Ongoing) - Limit to 6
  const currentProjects = useMemo(() => {
    return getProjectsForLocale(language)
      .filter((project) => project.status === "Active" || project.status === "Ongoing")
      .slice(0, 6);
  }, [language]);

  const services = useMemo(() => [
    {
      icon: FaSearch,
      title: t("whatWeDo.services.research.title"),
      description: t("whatWeDo.services.research.description"),
      color: "from-orange to-orange/85",
      bgColor: "bg-orange/10",
      iconColor: "text-orange",
    },
    {
      icon: FaChartBar,
      title: t("whatWeDo.services.impact.title"),
      description: t("whatWeDo.services.impact.description"),
      color: "from-orange/80 to-orange",
      bgColor: "bg-orange/10",
      iconColor: "text-orange",
    },
    {
      icon: FaBook,
      title: t("whatWeDo.services.synthesis.title"),
      description: t("whatWeDo.services.synthesis.description"),
      color: "from-orange to-orange/85",
      bgColor: "bg-orange/10",
      iconColor: "text-orange",
    },
    {
      icon: FaUsersCog,
      title: t("whatWeDo.services.learning.title"),
      description: t("whatWeDo.services.learning.description"),
      color: "from-orange/80 to-orange",
      bgColor: "bg-orange/10",
      iconColor: "text-orange",
    },
  ], [t]);

  const strategicObjectives = useMemo(() => [
    {
      number: "01",
      title: t("whatWeDo.objectives.international.title"),
      description: t("whatWeDo.objectives.international.description"),
      icon: FaGlobe,
      color: "from-orange to-orange/85",
    },
    {
      number: "02",
      title: t("whatWeDo.objectives.partnership.title"),
      description: t("whatWeDo.objectives.partnership.description"),
      icon: FaHandshake,
      color: "from-orange/80 to-orange",
    },
    {
      number: "03",
      title: t("whatWeDo.objectives.peopleCentered.title"),
      description: t("whatWeDo.objectives.peopleCentered.description"),
      icon: FaUsers,
      color: "from-orange to-orange/85",
    },
    {
      number: "04",
      title: t("whatWeDo.objectives.staffWelfare.title"),
      description: t("whatWeDo.objectives.staffWelfare.description"),
      icon: FaUsers,
      color: "from-orange/80 to-orange",
    },
    {
      number: "05",
      title: t("whatWeDo.objectives.financial.title"),
      description: t("whatWeDo.objectives.financial.description"),
      icon: FaDollarSign,
      color: "from-orange to-orange/85",
    },
  ], [t]);

  const handleProjectClick = (project) => {
    if (project.detailLink && project.detailLink !== "#") {
      navigate(project.detailLink);
    } else if (project.slug) {
      navigate(`/projects/${project.slug}`);
    }
  };

  // Countries for interactive map
  const countries = [
    "Ghana", "Cote D'Ivoire", "Cameroon", "Egypt", "Kenya", "Morocco", 
    "Nigeria", "Senegal", "Uganda"
  ];

  // Custom slider arrows
  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Previous"
    >
      <FaChevronLeft className="text-orange group-hover:text-orange/80 transition-colors" />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Next"
    >
      <FaChevronRight className="text-orange group-hover:text-orange/80 transition-colors" />
    </button>
  );

  const projectSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section
      id="whatwedo"
      className="max-container max-w-full w-full min-h-screen lg:justify-center flex flex-col font-poppins bg-white"
    >
      {/* Enhanced Hero Section */}
      <motion.div
        className="relative w-full mt-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.img 
          src={farmer} 
          className="w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[550px] object-cover" 
          alt="What We Do"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
        
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-orange/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-40 h-40 bg-orange/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="text-center px-4 max-w-4xl mx-auto">
            <motion.h1
              className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              What We Do
            </motion.h1>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-orange to-orange/85 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Redesigned Services Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-20 md:py-28 bg-gradient-to-b from-white via-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange to-orange/85 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Our Core Services
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-orange to-orange/85 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isHovered = hoveredService === index;
              return (
                <motion.div
                  key={index}
                  className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                  initial={{ opacity: 0, y: 50, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onHoverStart={() => setHoveredService(index)}
                  onHoverEnd={() => setHoveredService(null)}
                >
                  {/* Animated Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Icon Container */}
                  <motion.div
                    className={`relative mb-6 inline-flex p-4 rounded-2xl ${service.bgColor} group-hover:scale-110 transition-transform duration-500`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className={`text-4xl ${service.iconColor}`} />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-orange/20 to-orange/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange group-hover:to-orange/85 transition-all duration-500">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    {service.description}
                  </p>

                  {/* Animated Border */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Where We Work Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-20 md:py-28 bg-gradient-to-br from-gray-50 via-orange/5 to-gray-50 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.1 }}
            >
              <FaMapMarkerAlt className="text-4xl text-orange" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                {t("work.whereWeWork")}
              </h2>
            </motion.div>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-orange to-orange/85 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Interactive Map */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={map}
                  alt="Map"
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            </motion.div>

            {/* Countries List */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                {t("work.description")}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {countries.map((country, index) => (
                  <motion.div
                    key={country}
                    className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-orange group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3">
                      <FaMapMarkerAlt className="text-orange group-hover:scale-125 transition-transform duration-300" />
                      <span className="font-semibold text-gray-800 group-hover:text-orange transition-colors">
                        {country}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modernized Strategic Objectives Section */}
      <section
        id="strategic-objectives"
        className="w-full px-4 sm:px-6 lg:px-8 py-20 md:py-28 bg-gradient-to-b from-white to-gray-50"
      >
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange to-orange/85 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t("whatWeDo.title")}
          </motion.h2>
          <motion.p
            className="mt-5 max-w-3xl mx-auto text-base md:text-lg text-gray-600 leading-relaxed font-poppins px-2"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            {t("whatWeDo.objectivesSectionSubtitle")}
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-orange to-orange/85 mx-auto rounded-full mt-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {strategicObjectives.map((objective, index) => {
              const Icon = objective.icon;
              const isHovered = hoveredObjective === index;
              return (
                <motion.div
                  key={index}
                  className={`relative bg-gradient-to-br ${objective.color} rounded-3xl p-8 shadow-2xl text-white overflow-hidden group cursor-pointer`}
                  initial={{ opacity: 0, y: 50, rotateY: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -15, scale: 1.05, rotateY: 5 }}
                  onHoverStart={() => setHoveredObjective(index)}
                  onHoverEnd={() => setHoveredObjective(null)}
                >
                  {/* Animated Background Pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-10"
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    style={{
                      backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />

                  {/* Number Badge */}
                  <motion.div
                    className="absolute top-6 right-6 bg-white/20 backdrop-blur-md rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl border-2 border-white/30"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {objective.number}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className="mb-6 relative z-10"
                    animate={isHovered ? {
                      rotate: [0, -10, 10, -10, 0],
                      scale: [1, 1.2, 1],
                    } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="text-6xl mb-4 drop-shadow-lg" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="font-bold text-2xl md:text-3xl mb-4 leading-tight">
                      {objective.title}
                    </h3>
                    <p className="text-white/90 text-base md:text-lg leading-relaxed">
                      {objective.description}
                    </p>
                  </div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />

                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    initial={{ x: "-100%" }}
                    animate={isHovered ? { x: "200%" } : { x: "-100%" }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Projects Slider Section */}
      <section
        id="current-projects"
        className="bg-gradient-to-br from-gray-50 via-orange/5 to-gray-100 py-20 md:py-28 relative overflow-hidden"
      >
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-orange rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-orange/35 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-4 mb-6"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="bg-gradient-to-br from-orange to-orange/85 rounded-full p-4 shadow-xl"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <img src={clipboard} alt="Projects" className="w-8 h-8" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange to-orange/85">
                Current Projects
              </h2>
            </motion.div>
            <motion.p
              className="text-gray-600 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Explore our active initiatives across Sub-Saharan Africa
            </motion.p>
          </motion.div>

          <div className="relative px-8 md:px-12">
            <Slider {...projectSliderSettings}>
              {currentProjects.map((project, index) => {
                const colors = project.color === "orange" 
                  ? { bg: "bg-orange", text: "text-orange", border: "border-orange" }
                  : { bg: "bg-orange", text: "text-orange", border: "border-orange" };
                
                return (
                  <div key={project.id} className="px-3">
                    <motion.div
                      className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer group h-full"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -10, scale: 1.02 }}
                      onClick={() => handleProjectClick(project)}
                    >
                      <div className="relative h-56 overflow-hidden">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.15 }}
                          transition={{ duration: 0.5 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <motion.div
                          className={`absolute top-4 right-4 ${colors.bg} text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg`}
                          whileHover={{ scale: 1.1 }}
                        >
                          {project.status}
                        </motion.div>
                      </div>
                      <div className="p-6">
                        <h3 className={`font-bold text-xl mb-3 ${colors.text} group-hover:underline transition-all duration-300`}>
                          {project.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <span className="text-xs text-gray-500 font-medium">{project.location}</span>
                          <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            <FaArrowRight className={`${colors.text} text-lg`} />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </Slider>
          </div>

          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/our-projects">
              <Button label={`${t("common.moreProjects")} >>>`} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="w-full py-24 bg-gradient-to-b from-white to-gray-50">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-orange text-center mb-3">
            {t("whatWeDo.expertise")}
          </h2>
          <p className="text-center mt-3 text-gray-600 text-lg mb-8">
            {t("whatWeDo.expertiseSubtitle")}
          </p>
        </motion.div>

        {/* Content: left column | centered icon | right column */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-6 lg:gap-4 items-stretch">
            {/* LEFT – Black panel */}
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-black text-white w-full rounded-2xl lg:rounded-l-[90px] lg:rounded-r-xl px-6 md:px-10 py-12 shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <ul className="space-y-4 text-sm md:text-base leading-relaxed">
                {leftExpertise.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 group cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ x: 10, color: "#f89823" }}
                  >
                    <span className="text-orange mt-1 group-hover:scale-150 transition-transform duration-300">●</span>
                    <span className="group-hover:text-orange transition-colors duration-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Icon – vertically centered between the two columns */}
            <div className="flex justify-center items-center py-4 lg:py-0 lg:self-stretch">
              <motion.div
                className="flex bg-orange w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-full items-center justify-center shadow-xl z-10"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 200 }}
                whileHover={{ rotate: 360, scale: 1.1 }}
              >
                <img src={bulb} alt="Expertise" className="w-14 h-14 sm:w-16 sm:h-16" />
              </motion.div>
            </div>

            {/* RIGHT – Light panel */}
            <motion.div
              className="bg-gradient-to-br from-gray-100 to-gray-200 w-full rounded-2xl lg:rounded-r-[90px] lg:rounded-l-xl px-6 md:px-10 py-12 shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <ul className="space-y-4 text-sm md:text-base text-gray-800 leading-relaxed mb-8">
                {rightExpertise.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 group cursor-pointer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ x: -10, color: "#f89823" }}
                  >
                    <span className="text-orange mt-1 group-hover:scale-150 transition-transform duration-300">●</span>
                    <span className="group-hover:text-orange transition-colors duration-300">{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Button */}
              <motion.div
                className="mt-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/our-projects">
                  <Button label={`${t("common.moreProjects")} >>>`} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default WhatWeDo;
