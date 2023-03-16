import React, { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";

const Nav = ({ darkMode, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="max-w-screen-lg w-full px-4 mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center py-4">
        <div className="text-center mb-4 md:mb-0">
          <Logo darkMode={darkMode} />
        </div>
        <div className="hidden md:flex space-x-10 items-center">
          {/* Navigation links for large screens */}
          <a
            className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100"
            href="#about"
          >
            About
          </a>
          <a
            className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="text-gray-500 dark:text-gray-300 hover:text-gray-700 hover:border-b-1 dark:hover:text-gray-100"
            href="#contact"
          >
            Contact
          </a>
        </div>
        
        <div className="w-full flex justify-center md:hidden">
          <button
            className="focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <span className="block w-[44vw] h-0.5 bg-gray-500 dark:bg-gray-300"></span>
            <span className="block w-[42vw] h-0.5 bg-gray-500 dark:bg-gray-300 mt-1.5"></span>
            <span className="block w-[40vw] h-0.5 bg-gray-500 dark:bg-gray-300 mt-1.5"></span>
          </button>
        </div>
        <div className="mt-10">
          <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-2">
          {/* Navigation links for small screens */}
          <a
            className="text-gray-500 px-10 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100"
            href="#about"
          >
            About
          </a>
          <a
            className="text-gray-500 px-10 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="text-gray-500 px-10 dark:text-gray-300 hover:text-gray-700 hover:border-b-1 dark:hover:text-gray-100"
            href="#contact"
          >
            Contact
          </a>
         
        </div>
      )}
    </div>
  );
};

export default Nav;
