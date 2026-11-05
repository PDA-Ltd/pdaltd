import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { FaGlobe } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation();

  const languages = [
    { code: "en", name: "EN", flag: "🇬🇧" },
    { code: "fr", name: "FR", flag: "🇫🇷" },
  ];

  return (
    <div className="relative group">
      <motion.button
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={t("common.changeLanguage")}
      >
        <FaGlobe className="text-gray-700 text-lg" />
        <span className="font-semibold text-gray-700">{language.toUpperCase()}</span>
      </motion.button>
      
      <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-[120px]">
        {languages.map((lang) => (
          <motion.button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`w-full text-left px-4 py-2 hover:bg-orange hover:text-white transition-colors duration-300 flex items-center gap-2 ${
              language === lang.code ? "bg-orange/10 font-semibold" : ""
            }`}
            whileHover={{ x: 5 }}
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
