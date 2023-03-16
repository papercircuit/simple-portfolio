import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";


const Nav = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="max-w-screen-lg w-full px-4">
      <div className="flex justify-between items-center py-4">
        <Logo darkMode={darkMode} />
        <div classNam="flex space-evenly"> 
          <a
            className="text-gray-500 px-10 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100"
            href="#"
          >
            About
          </a>
          <a
            className="text-gray-500 px-10 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100"
            href="#"
          >
            Projects
          </a>
          <a
            className="text-gray-500 px-10 dark:text-gray-300 hover:text-gray-700 hover:border-b-1 dark:hover:text-gray-100"
            href="#"
          >
            Contact
          </a>
        </div>
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </div>
  );
};

export default Nav;
