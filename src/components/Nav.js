import React from "react";
import { ReactComponent as TextSVG } from "../assets/logo.svg";
import DarkModeToggle from "./DarkModeToggle";

const Nav = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="max-w-screen-lg w-full px-4">
      <div className="flex justify-between items-center py-4">
        {/* <Logo darkMode={darkMode} /> */}
        <TextSVG />
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </div>
  );
};

export default Nav;
