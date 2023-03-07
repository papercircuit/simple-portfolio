import { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import Hero from "./Hero";
import Footer from "./Footer";
import Repos from "./Repos";
import Nav from "./Nav";
import Projects from "./Projects";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (darkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 via-gray-300 to-gray-100 dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-700 dark:to-gray-600">
      <div className="max-w-screen-lg w-full px-4">
        <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero />
        <Projects />
        <Repos />
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
