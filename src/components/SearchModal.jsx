import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaTimes } from "react-icons/fa";
import { getProjectsForLocale } from "./ProjectsData";
import { useTranslation } from "../hooks/useTranslation";

const SearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const { language } = useTranslation();

  const performSearch = useCallback((query) => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchResults = [];
    const lowerQuery = query.toLowerCase();

    const projectList = getProjectsForLocale(language);
    projectList.forEach((project) => {
      const matches =
        project.title.toLowerCase().includes(lowerQuery) ||
        project.description.toLowerCase().includes(lowerQuery) ||
        (project.fullDescription && project.fullDescription.toLowerCase().includes(lowerQuery)) ||
        project.category.toLowerCase().includes(lowerQuery) ||
        project.location.toLowerCase().includes(lowerQuery);

      if (matches) {
        searchResults.push({
          type: "project",
          title: project.title,
          description: project.description,
          link: project.detailLink || `/projects/${project.slug}`,
        });
      }
    });

    // Search pages
    const pages = [
      { title: "Who We Are", link: "/who-we-are", description: "Learn about PDA's mission, vision, and team" },
      { title: "What We Do", link: "/what-we-do", description: "Our strategic themes, projects, and expertise" },
      { title: "Our Projects", link: "/our-projects", description: "Browse all our development projects" },
      // { title: "Our Impact", link: "/our-impact", description: "Impact stories, webinars, and workshops" },
      { title: "Publications", link: "/publications", description: "Research reports and publications" },
      { title: "Staff", link: "/staff", description: "Meet our team members" },
      { title: "Board of Directors", link: "/board", description: "Our board members" },
      { title: "Contact", link: "/contact", description: "Get in touch with us" },
    ];

    pages.forEach((page) => {
      if (
        page.title.toLowerCase().includes(lowerQuery) ||
        page.description.toLowerCase().includes(lowerQuery)
      ) {
        searchResults.push({
          type: "page",
          title: page.title,
          description: page.description,
          link: page.link,
        });
      }
    });

    setResults(searchResults.slice(0, 10)); // Limit to 10 results
  }, [language]);

  useEffect(() => {
    if (isOpen) {
      performSearch(searchQuery);
    }
  }, [searchQuery, isOpen, performSearch]);

  const handleResultClick = (link) => {
    navigate(link);
    onClose();
    setSearchQuery("");
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed top-0 left-0 right-0 z-[101] bg-white shadow-2xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="max-w-4xl mx-auto p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 relative">
                  <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for projects, pages, or content..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-lg focus:border-orange focus:outline-none text-lg font-poppins"
                    autoFocus
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <FaTimes />
                    </button>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="px-6 py-4 bg-gray-200 hover:bg-gray-300 rounded-lg font-poppins font-semibold transition-colors"
                >
                  Close
                </button>
              </div>

              {searchQuery && (
                <div className="max-h-[60vh] overflow-y-auto">
                  {results.length > 0 ? (
                    <div className="space-y-2">
                      {results.map((result, index) => (
                        <motion.div
                          key={index}
                          className="p-4 bg-gray-50 hover:bg-orange/10 rounded-lg cursor-pointer border-l-4 border-orange transition-all duration-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={() => handleResultClick(result.link)}
                          whileHover={{ x: 5, backgroundColor: "rgba(248, 154, 35, 0.1)" }}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <p className="text-xs text-orange font-semibold mb-1 uppercase">
                                {result.type}
                              </p>
                              <h3 className="font-bold text-gray-800 mb-1 font-poppins">{result.title}</h3>
                              <p className="text-sm text-gray-600 font-poppins">{result.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-500 font-poppins">{`No results found for "${searchQuery}"`}</p>
                    </div>
                  )}
                </div>
              )}

              {!searchQuery && (
                <div className="text-center py-12">
                  <FaSearch className="text-6xl text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 font-poppins">Start typing to search...</p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
