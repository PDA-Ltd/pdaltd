import React, { useState, useMemo } from "react";
import { archivedProjects } from "../components/ArchivedProjectsData";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaFilter, FaCalendarAlt, FaUsers, FaGlobe, FaArchive } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";
import {
  rand1,
  rand2,
  rand3,
  rand4,
  rand5,
  rand6,
  rand7,
  rand8,
  rand9,
  rand10,
  rand11,
  rand12,
  rand13,
  rand14,
  rand15,
} from "../assets/images";

/**
 * Archived project copy is English-only for now. UI chrome (filters, headings) still follows the site language.
 * State is keyed by `language` so filter values stay in sync when "All" is translated (e.g. All vs Tous).
 */
function ArchivesPageContent() {
  const { t, language } = useTranslation();
  const navigate = useNavigate();
  const allValue = t("projectsPage.all");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(allValue);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedPartner, setSelectedPartner] = useState(allValue);
  const [selectedCountry, setSelectedCountry] = useState(allValue);

  const getArchivedField = (project, fieldName) => {
    if (!project) return "";
    const v = project[fieldName];
    return typeof v === "string" ? v : "";
  };

  // Extract unique partners and countries from archived projects
  const uniquePartners = useMemo(() => {
    const partners = new Set();
    archivedProjects.forEach((project) => {
      if (project.partners && project.partners.trim() !== "") {
        const partnerList = project.partners.split(/[;,]/).map((p) => p.trim());
        partnerList.forEach((p) => {
          if (p) partners.add(p);
        });
      }
    });
    return Array.from(partners).sort();
  }, []);

  const uniqueCountries = useMemo(() => {
    const countries = new Set();
    archivedProjects.forEach((project) => {
      if (project.location && project.location.trim() !== "") {
        const locationList = project.location.split(",").map((l) => l.trim());
        locationList.forEach((loc) => {
          const country = loc.split(/[()]/)[0].trim();
          if (country) countries.add(country);
        });
      }
    });
    return Array.from(countries).sort();
  }, []);

  // Randomized archive images (stable for the current page load)
  const randomizedArchiveImages = useMemo(() => {
    const pool = [
      rand1,
      rand2,
      rand3,
      rand4,
      rand5,
      rand6,
      rand7,
      rand8,
      rand9,
      rand10,
      rand11,
      rand12,
      rand13,
      rand14,
      rand15,
    ];

    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const byProjectId = {};

    archivedProjects.forEach((project, index) => {
      byProjectId[project.id] = shuffled[index % shuffled.length];
    });

    return byProjectId;
  }, []);

  // Categories list - translated based on current language
  const categories = useMemo(() => {
    const categoryTranslations = {
      en: {
        all: allValue,
        agriculture: "Agriculture",
        capacityBuilding: "Capacity Building",
        childProtection: "Child Protection and Welfare",
        climate: "Climate",
        cocoaSector: "Cocoa Sector",
        communityDevelopment: "Community Development",
        educationLiteracy: "Education & Literacy",
        employment: "Employment",
        evidenceGeneration: "Evidence Generation (MERL)",
        facilitationModeration: "Facilitation & Moderation",
        organizationalDevelopment: "Organizational Development",
        policyAdvocacy: "Policy Analysis & Advocacy",
        womenEmpowerment: "Women's Economic Empowerment",
        youthWelfare: "Youth Welfare",
      },
      fr: {
        all: allValue,
        agriculture: "Agriculture",
        capacityBuilding: "Renforcement des Capacités",
        childProtection: "Protection et Bien-être des Enfants",
        climate: "Climat",
        cocoaSector: "Secteur du Cacao",
        communityDevelopment: "Développement Communautaire",
        educationLiteracy: "Éducation et Alphabétisation",
        employment: "Emploi",
        evidenceGeneration: "Génération de Preuves (MERL)",
        facilitationModeration: "Facilitation et Modération",
        organizationalDevelopment: "Développement Organisationnel",
        policyAdvocacy: "Analyse et Plaidoyer Politique",
        womenEmpowerment: "Autonomisation Économique des Femmes",
        youthWelfare: "Bien-être des Jeunes",
      },
    };

    return Object.values(categoryTranslations[language] || categoryTranslations.en);
  }, [language, allValue]);

  // Map project category to filter category name
  const mapCategoryToFilter = (projectCategory) => {
    if (!projectCategory) return allValue;

    const categoryLower = projectCategory.toLowerCase();

    if (categoryLower.includes("agriculture") || categoryLower.includes("cocoa") || categoryLower.includes("cacao")) {
      if (categoryLower.includes("cocoa") || categoryLower.includes("cacao")) {
        return language === "fr" ? "Secteur du Cacao" : "Cocoa Sector";
      }
      return language === "fr" ? "Agriculture" : "Agriculture";
    }
    if (categoryLower.includes("education") || categoryLower.includes("literacy") || categoryLower.includes("éducation") || categoryLower.includes("alphabétisation")) {
      return language === "fr" ? "Éducation et Alphabétisation" : "Education & Literacy";
    }
    if (categoryLower.includes("child") || categoryLower.includes("protection") || categoryLower.includes("welfare") || categoryLower.includes("enfant") || categoryLower.includes("bien-être")) {
      return language === "fr" ? "Protection et Bien-être des Enfants" : "Child Protection and Welfare";
    }
    if (categoryLower.includes("women") || categoryLower.includes("gender") || categoryLower.includes("femme") || categoryLower.includes("genre")) {
      return language === "fr" ? "Autonomisation Économique des Femmes" : "Women's Economic Empowerment";
    }
    if (categoryLower.includes("youth") || categoryLower.includes("jeune")) {
      return language === "fr" ? "Bien-être des Jeunes" : "Youth Welfare";
    }
    if (categoryLower.includes("climate") || categoryLower.includes("environment") || categoryLower.includes("climat") || categoryLower.includes("environnement")) {
      return language === "fr" ? "Climat" : "Climate";
    }
    if (categoryLower.includes("capacity") || categoryLower.includes("training") || categoryLower.includes("capacité") || categoryLower.includes("formation")) {
      return language === "fr" ? "Renforcement des Capacités" : "Capacity Building";
    }
    if (categoryLower.includes("community") || categoryLower.includes("communautaire")) {
      return language === "fr" ? "Développement Communautaire" : "Community Development";
    }
    if (categoryLower.includes("employment") || categoryLower.includes("job") || categoryLower.includes("emploi")) {
      return language === "fr" ? "Emploi" : "Employment";
    }
    if (categoryLower.includes("research") || categoryLower.includes("evaluation") || categoryLower.includes("merl") || categoryLower.includes("recherche") || categoryLower.includes("évaluation")) {
      return language === "fr" ? "Génération de Preuves (MERL)" : "Evidence Generation (MERL)";
    }
    if (categoryLower.includes("policy") || categoryLower.includes("advocacy") || categoryLower.includes("politique") || categoryLower.includes("plaidoyer")) {
      return language === "fr" ? "Analyse et Plaidoyer Politique" : "Policy Analysis & Advocacy";
    }
    if (categoryLower.includes("organizational") || categoryLower.includes("organization") || categoryLower.includes("organisationnel") || categoryLower.includes("organisation")) {
      return language === "fr" ? "Développement Organisationnel" : "Organizational Development";
    }
    if (categoryLower.includes("facilitation") || categoryLower.includes("moderation") || categoryLower.includes("facilitation") || categoryLower.includes("modération")) {
      return language === "fr" ? "Facilitation et Modération" : "Facilitation & Moderation";
    }

    return language === "fr" ? "Développement Communautaire" : "Community Development";
  };

  // Filter projects based on search and filters
  const filteredProjects = useMemo(() => {
    return archivedProjects.filter((project) => {
      // Search filter
      if (searchQuery) {
        const searchLower = searchQuery.toLowerCase();
        const titleMatch = String(getArchivedField(project, "title")).toLowerCase().includes(searchLower);
        const descMatch = String(getArchivedField(project, "description")).toLowerCase().includes(searchLower);
        if (!titleMatch && !descMatch) return false;
      }

      // Category filter
      if (selectedCategory !== allValue) {
        const projectCategory = mapCategoryToFilter(project.category);
        if (projectCategory !== selectedCategory) return false;
      }

      // Partner filter
      if (selectedPartner !== allValue) {
        if (!project.partners || !project.partners.includes(selectedPartner)) return false;
      }

      // Country filter
      if (selectedCountry !== allValue) {
        if (!project.location || !project.location.includes(selectedCountry)) return false;
      }

      // Date filter (if period contains selected date)
      if (selectedDate) {
        if (!project.period || !project.period.includes(selectedDate)) return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedPartner, selectedCountry, selectedDate, language, allValue]);

  return (
    <section className="max-container w-full min-h-screen bg-gray-50 py-20 pt-32">
      {/* Header */}
      <div className="text-center mb-8 px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <FaArchive className="text-4xl text-orange" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-poppins">
            {language === "fr" ? "Archives des Projets" : "Project Archives"}
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto font-poppins"
        >
          {language === "fr"
            ? "Explorez nos projets historiques réalisés avant 2016"
            : "Explore our historical projects completed before 2016"}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4"
        >
          <button
            onClick={() => navigate("/our-projects")}
            className="text-orange hover:text-orange/80 font-semibold font-poppins transition-colors"
          >
            {language === "fr" ? "← Voir les projets actuels" : "← View Current Projects"}
          </button>
        </motion.div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={language === "fr" ? "Rechercher des projets..." : "Search projects..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange font-poppins"
              />
            </div>
          </div>

          {/* Filter Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 font-poppins">
                <FaFilter className="inline mr-2" />
                {language === "fr" ? "Catégorie" : "Category"}
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange font-poppins"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Partner Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 font-poppins">
                <FaUsers className="inline mr-2" />
                {language === "fr" ? "Partenaire" : "Partner"}
              </label>
              <select
                value={selectedPartner}
                onChange={(e) => setSelectedPartner(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange font-poppins"
              >
                <option value={allValue}>{allValue}</option>
                {uniquePartners.map((partner) => (
                  <option key={partner} value={partner}>
                    {partner}
                  </option>
                ))}
              </select>
            </div>

            {/* Country Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 font-poppins">
                <FaGlobe className="inline mr-2" />
                {language === "fr" ? "Pays" : "Country"}
              </label>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange font-poppins"
              >
                <option value={allValue}>{allValue}</option>
                {uniqueCountries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            {/* Date Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 font-poppins">
                <FaCalendarAlt className="inline mr-2" />
                {language === "fr" ? "Année" : "Year"}
              </label>
              <input
                type="text"
                placeholder={language === "fr" ? "Ex: 2008" : "e.g., 2008"}
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange font-poppins"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg font-poppins">
              {language === "fr"
                ? "Aucun projet trouvé avec ces filtres."
                : "No projects found with these filters."}
            </p>
          </div>
        ) : (
          <motion.div
            key={language}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {filteredProjects.map((project) => {
              const projectTitle = getArchivedField(project, "title");
              const projectDescription = getArchivedField(project, "description");
              const projectCategory = mapCategoryToFilter(project.category);

              return (
                <motion.div
                  key={project.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => navigate(`/archives/${project.slug}`)}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={randomizedArchiveImages[project.id]}
                      alt={projectTitle}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-orange text-white px-3 py-1 rounded-full text-xs font-semibold font-poppins">
                        {language === "fr" ? "Archivé" : "Archived"}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-xs font-semibold text-orange uppercase tracking-wide font-poppins">
                        {projectCategory}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins line-clamp-2">
                      {projectTitle}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 font-poppins">
                      {projectDescription}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 font-poppins">
                      {project.period && (
                        <span className="flex items-center gap-1">
                          <FaCalendarAlt />
                          {project.period}
                        </span>
                      )}
                      {project.location && (
                        <span className="flex items-center gap-1">
                          <FaGlobe />
                          {project.location.split(",")[0]}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}

const ArchivesPage = () => {
  const { language } = useTranslation();
  return <ArchivesPageContent key={language} />;
};

export default ArchivesPage;
