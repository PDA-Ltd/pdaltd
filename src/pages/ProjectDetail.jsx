import { useMemo } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getProjectForSlug } from "../components/ProjectsData";
import { archivedProjects } from "../components/ArchivedProjectsData";
import { localizeArchivedProject } from "../data/projectLocalization.js";
import { motion } from "framer-motion";
import { FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaTag } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { currentLanguage } = useTranslation();

  const isArchived = location.pathname.startsWith("/archives");

  const project = useMemo(() => {
    if (isArchived) {
      const raw = archivedProjects.find((p) => p.slug === slug);
      return raw ? localizeArchivedProject(raw, currentLanguage) : null;
    }
    return getProjectForSlug(slug, currentLanguage);
  }, [slug, isArchived, currentLanguage]);

  if (!project) {
    return (
      <section className="max-container w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-orange mb-4">{currentLanguage === "fr" ? "Projet Non Trouvé" : "Project Not Found"}</h1>
          <p className="text-gray-600 mb-8">{currentLanguage === "fr" ? "Le projet que vous recherchez n'existe pas." : "The project you're looking for doesn't exist."}</p>
          <button
            onClick={() => navigate("/our-projects")}
            className="bg-orange text-white px-6 py-3 rounded-lg hover:bg-orange/90 transition-colors"
          >
            {currentLanguage === "fr" ? "Retour aux Projets" : "Back to Projects"}
          </button>
        </div>
      </section>
    );
  }

  const getColorClasses = (color) => {
    if (color === "orange") {
      return {
        bg: "bg-orange",
        text: "text-orange",
        border: "border-orange",
      };
    }
    return {
      bg: "bg-orange",
      text: "text-orange",
      border: "border-orange",
    };
  };

  const colors = getColorClasses(project.color);

  const handleBackClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isArchived) {
      navigate("/archives", { replace: false });
    } else {
      navigate("/our-projects", { replace: false });
    }
  };

  const objectives = project.objectives || [];
  const activities = project.activities || [];
  const outcomes = project.outcomes || [];

  return (
    <section className="max-container w-full min-h-screen bg-white relative" key={`project-${slug}-${currentLanguage}`}>
      <div className="fixed top-20 left-6 z-50 lg:left-20">
        <motion.button
          onClick={handleBackClick}
          onMouseDown={(e) => e.preventDefault()}
          className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-gray-700 hover:text-orange hover:bg-white transition-all duration-300 cursor-pointer font-poppins font-medium shadow-md hover:shadow-lg border border-gray-200 hover:border-orange"
          type="button"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaArrowLeft className="text-lg" />
          <span>{currentLanguage === "fr"
            ? (isArchived ? "Retour aux Archives" : "Retour aux Projets")
            : (isArchived ? "Back to Archives" : "Back to Projects")}</span>
        </motion.button>
      </div>

      <motion.div
        className="relative w-full h-[60vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-poppins mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {project.title}
          </motion.h1>
          {project.subtitle && (
            <motion.p
              className="text-xl text-white/90 font-poppins"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {project.subtitle}
            </motion.p>
          )}
        </div>
      </motion.div>

      <div className="px-6 lg:px-20 py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {project.partners && (
            <div className="flex items-start gap-3">
              <FaUsers className={`text-2xl ${colors.text} mt-1`} />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">{currentLanguage === "fr" ? "Partenaires" : "Partners"}</h3>
                <p className="text-gray-600 text-sm">{project.partners}</p>
              </div>
            </div>
          )}
          {project.period && (
            <div className="flex items-start gap-3">
              <FaCalendarAlt className={`text-2xl ${colors.text} mt-1`} />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">{currentLanguage === "fr" ? "Période" : "Period"}</h3>
                <p className="text-gray-600 text-sm">{project.period}</p>
              </div>
            </div>
          )}
          {project.location && (
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className={`text-2xl ${colors.text} mt-1`} />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">{currentLanguage === "fr" ? "Lieu" : "Location"}</h3>
                <p className="text-gray-600 text-sm">{project.location}</p>
              </div>
            </div>
          )}
          {project.category && (
            <div className="flex items-start gap-3">
              <FaTag className={`text-2xl ${colors.text} mt-1`} />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">{currentLanguage === "fr" ? "Catégorie" : "Category"}</h3>
                <p className="text-gray-600 text-sm">{project.category}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="px-6 lg:px-20 py-12" key={currentLanguage}>
        <div className="max-w-4xl mx-auto">
          {project.snapshot && (
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className={`text-3xl font-bold ${colors.text} mb-6 font-poppins`}>
                {currentLanguage === "fr" ? "Aperçu du Projet" : "Project Snapshot"}
              </h2>
              <div className="prose prose-lg max-w-none">
                {(project.snapshot || "").split("\n").map((paragraph, index) => (
                  paragraph.trim() && (
                    <p key={index} className="text-gray-700 mb-4 leading-relaxed font-poppins">
                      {paragraph.trim()}
                    </p>
                  )
                ))}
              </div>
            </motion.div>
          )}

          {project.howWeWentAboutIt && (
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className={`text-3xl font-bold ${colors.text} mb-6 font-poppins`}>
                {currentLanguage === "fr" ? "Comment Nous Nous Y Sommes Pris" : "How We Went About It"}
              </h2>
              <div className="prose prose-lg max-w-none">
                {(project.howWeWentAboutIt || "").split("\n").map((paragraph, index) => (
                  paragraph.trim() && (
                    <p key={index} className="text-gray-700 mb-4 leading-relaxed font-poppins">
                      {paragraph.trim()}
                    </p>
                  )
                ))}
              </div>
            </motion.div>
          )}

          {objectives.length > 0 && (
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className={`text-3xl font-bold ${colors.text} mb-6 font-poppins`}>
                {currentLanguage === "fr" ? "Objectifs Clés" : "Key Objectives"}
              </h2>
              <ul className="list-disc list-inside space-y-3">
                {objectives.map((objective, index) => (
                  <li key={index} className="text-gray-700 leading-relaxed font-poppins">
                    {objective}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {activities.length > 0 && (
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className={`text-3xl font-bold ${colors.text} mb-6 font-poppins`}>
                {currentLanguage === "fr" ? "Activités Clés" : "Key Activities"}
              </h2>
              <ul className="list-disc list-inside space-y-3">
                {activities.map((activity, index) => (
                  <li key={index} className="text-gray-700 leading-relaxed font-poppins">
                    {activity}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {outcomes.length > 0 && (
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className={`text-3xl font-bold ${colors.text} mb-6 font-poppins`}>
                {currentLanguage === "fr" ? "Résultats Attendus" : "Expected Outcomes"}
              </h2>
              <ul className="list-disc list-inside space-y-3">
                {outcomes.map((outcome, index) => (
                  <li key={index} className="text-gray-700 leading-relaxed font-poppins">
                    {outcome}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {project.additionalSections && project.additionalSections.map((section, index) => (
            <motion.div
              key={index}
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
            >
              <h2 className={`text-3xl font-bold ${colors.text} mb-6 font-poppins`}>
                {section.title}
              </h2>
              <div className="prose prose-lg max-w-none">
                {typeof section.content === "string" ? (
                  section.content.split("\n").map((paragraph, pIndex) => (
                    paragraph.trim() && (
                      <p key={pIndex} className="text-gray-700 mb-4 leading-relaxed font-poppins">
                        {paragraph.trim()}
                      </p>
                    )
                  ))
                ) : (
                  <ul className="list-disc list-inside space-y-3">
                    {Array.isArray(section.content) && section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700 leading-relaxed font-poppins">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}

          <motion.div
            className="mt-12 pt-8 border-t border-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="flex items-center gap-4">
              <span className="text-gray-600 font-semibold">{currentLanguage === "fr" ? "Statut :" : "Status:"}</span>
              <span className={`px-4 py-2 rounded-full text-white font-semibold ${colors.bg}`}>
                {project.status}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
