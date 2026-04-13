import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaTimes, FaBars } from "react-icons/fa";
// import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { pdaLogo } from "../assets/images";
import Menu from "./Menu";
import LanguageSwitcher from "./LanguageSwitcher";

const Nav = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    if (isMenuVisible) {
      setIsMenuVisible(false);
    } else {
      setIsMenuVisible(true);
    }
  };

  const handleClick = () => {
    setIsMenuVisible(false);
  };

  return (
    <header className="w-full h-24 fixed top-0 left-0 z-50">
      <div className="w-full h-3 bg-orange relative z-10"></div>
      <nav
        className="w-full shadow-3xl bg-white flex justify-around items-center relative z-10 px-4"
        aria-label="Primary navigation"
      >
        <motion.a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            className="pt-3 pb-3"
            src={pdaLogo}
            alt="Logo"
            width={150}
            height={40}
          />
        </motion.a>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <div className="relative">
            <button
              onClick={toggleMenu}
              className="sidebarIconToggle cursor-pointer w-[50px] h-[50px] z-[99] relative flex flex-col items-center justify-center"
              aria-label="Toggle menu"
              aria-expanded={isMenuVisible}
              aria-controls="primary-menu-panel"
            >
              {isMenuVisible ? (
                <motion.div
                  className="w-full h-full flex items-center justify-center"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaTimes className="text-3xl md:text-4xl text-black font-bold" />
                </motion.div>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <FaBars className="text-3xl md:text-4xl text-black font-bold" />
                </div>
              )}
            </button>
          </div>
        </div>
      </nav>
      <div className="h-28"></div>

      <div
        id="primary-menu-panel"
        className={`absolute left-0 w-full bg-white bg-opacity-90 transform transition-transform duration-1000 ease-in-out ${
          isMenuVisible ? "translate-y-[-0%]" : "translate-y-[-200%]"
        }`}
        style={{
          top: "100px",
          zIndex: 1,
          maxHeight: "calc(100vh - 100px)",
        }}
      >
        <Menu onLinkClick={handleClick} />
      </div>
    </header>
  );
};

export default Nav;
