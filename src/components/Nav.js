import React, { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";

const Nav = ({ darkMode, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div
      className="max-w-screen-lg w-full items-center px-4 mx-auto border-b-2 dark:border-b-2 border-gray-700 dark:border-gray-300
    "
    >
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
        <div className=" flex justify-center pb-4 md:block">
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
            className="text-gray-500 px-10 pb-2 dark:text-gray-300 hover:text-gray-700 hover:border-b-1 dark:hover:text-gray-100"
            href="#contact"
          >
            Contact
          </a>
        </div>
      )}
      <div className=" flex justify-center pb-4 hidden">
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </div>
  );
};

export default Nav;
