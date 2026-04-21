import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { getProjectsForLocale } from "../components/ProjectsData";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { clipboard } from "../assets/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../components/Button";
import { useTranslation } from "../hooks/useTranslation";

const CurrentProjects = () => {
  const navigate = useNavigate();
  const { language } = useTranslation();

  // Filter current projects (Active and Ongoing) and limit to 6
  const currentProjects = useMemo(() => {
    const projects = getProjectsForLocale(language);
    const featuredSlugs = [
      "digital-economy-programs-young-africa-works-ghana",
      "ghana-community-led-development-collaborative",
      "absa-young-africa-works-program",
      "global-plastic-action-partnership",
      "happy-program",
      "ghana-netherlands-seed-partnership-gnsp",
    ];

    const featuredProjects = projects.filter(
      (project) =>
        featuredSlugs.includes(project.slug) &&
        (project.status === "Active" || project.status === "Ongoing")
    );

    if (featuredProjects.length >= featuredSlugs.length) {
      const ordered = featuredSlugs
        .map((slug) => featuredProjects.find((p) => p.slug === slug))
        .filter(Boolean);
      return ordered.slice(0, 6);
    }

    return projects
      .filter((project) => project.status === "Active" || project.status === "Ongoing")
      .slice(0, 6);
  }, [language]);

  const handleProjectClick = (project) => {
    if (project.detailLink && project.detailLink !== "#") {
      navigate(project.detailLink);
    } else if (project.slug) {
      navigate(`/projects/${project.slug}`);
    }
  };

  // Custom Next Arrow
  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Next"
    >
      <FaChevronRight className="text-orange group-hover:text-orange/80 transition-colors text-xl" />
    </button>
  );

  // Custom Prev Arrow
  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Previous"
    >
      <FaChevronLeft className="text-orange group-hover:text-orange/80 transition-colors text-xl" />
    </button>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-orange rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-orange/35 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              Current Projects
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
            Explore our active initiatives across Sub-Saharan Africa
          </motion.p>
        </motion.div>

        <div className="relative px-2 sm:px-4 md:px-8 lg:px-12">
          <Slider {...sliderSettings}>
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
                    <div className="relative h-48 sm:h-56 overflow-hidden">
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
                    <div className="p-4 sm:p-6">
                      <h3 className={`font-bold text-lg md:text-xl mb-3 ${colors.text} group-hover:underline transition-all duration-300`}>
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base mb-4 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <span className="text-sm text-gray-500 font-medium">{project.location}</span>
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
            <Button label="View All Projects >>>" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentProjects;
