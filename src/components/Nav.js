import React, { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";
import { motion } from "framer-motion";
import Resume from "../assets/resume.pdf";

const Nav = ({ darkMode, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const hoverVariants = {
    initial: {
      color: "inherit",
    },
    hover: {
      color: "#10B981",
      fontSize: "calc(1rem + 0.2vw)",
    },
  };

  const openResumeInNewTab = () => {
    window.open(Resume, "_blank");
  };

  return (
    <div
      className="max-w-screen-lg w-full items-center px-4 mx-auto border-b-4 dark:border-b-4 border-gray-700 dark:border-gray-300
    "
    >
      <div className="flex flex-col md:flex-row justify-between items-center py-4">
        <div className="text-center mb-4 md:mb-0">
          <Logo darkMode={darkMode} />
        </div>
        <div className="hidden md:flex space-x-10 items-center">
          {/* Navigation links for large screens */}
          <motion.a
            className="text-xl text-gray-500 dark:text-gray-300"
            href="#about"
            variants={hoverVariants}
            whileHover="hover"
          >
            About
          </motion.a>
          <motion.a
            className="text-xl text-gray-500 dark:text-gray-300"
            href="#projects"
            variants={hoverVariants}
            whileHover="hover"
          >
            Projects
          </motion.a>
          <motion.a
            className="text-xl text-gray-500 dark:text-gray-300"
            variants={hoverVariants}
            whileHover="hover"
            href="mailto:kenny.johnson.nyc@gmail.com"
          >
            Contact
          </motion.a>
          <motion.button
            className="text-xl text-gray-500 dark:text-gray-300"
            variants={hoverVariants}
            whileHover="hover"
            onClick={openResumeInNewTab}
          >
            Resume
          </motion.button>
        </div>
        <div className="text-xl flex justify-center pb-4 md:block">
          <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        <div className="w-full flex justify-center md:hidden">
          <button className="focus:outline-none" onClick={toggleMobileMenu}>
            <span className="block w-[24vw] h-0.5 bg-gray-500 dark:bg-gray-300"></span>
            <span className="block w-[22vw] h-0.5 bg-gray-500 dark:bg-gray-300 mt-1.5"></span>
            <span className="block w-[20vw] h-0.5 bg-gray-500 dark:bg-gray-300 mt-1.5"></span>
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="text-center md:hidden flex flex-col space-y-2 mt-2">
          {/* Navigation links for small screens */}
          <motion.a
            className="text-gray-500 px-10 dark:text-gray-300"
            href="#about"
            variants={hoverVariants}
            whileHover="hover"
          >
            About
          </motion.a>
          <motion.a
            className="text-gray-500 px-10 dark:text-gray-300"
            href="#projects"
            variants={hoverVariants}
            whileHover="hover"
          >
            Projects
          </motion.a>
          <motion.a
            className="text-gray-500 px-10 pb-2 dark:text-gray-300"
            href="#contact"
            variants={hoverVariants}
            whileHover="hover"
          >
            Contact
          </motion.a>
          <motion.button
            className="text-xl text-gray-500 dark:text-gray-300"
            variants={hoverVariants}
            whileHover="hover"
            onClick={openResumeInNewTab}
          >
            Resume
          </motion.button>
        </div>
      )}
      <div className=" flex justify-center pb-4 hidden">
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </div>
  );
};

export default Nav;
