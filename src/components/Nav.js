import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";

const Nav = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="max-w-screen-lg w-full px-4">
      <div className="flex justify-between items-center py-4">
        <Logo darkMode={darkMode} />
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </div>
  );
};

export default Nav;
