import { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import Hero from "../components/Hero";
import Repos from "../components/Repos.tsx";
import Projects from "../components/Projects.tsx";



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
    <div

      className="flex justify-center items-center min-h-screen bg-gradient-to-br from-white-100 via-blue-400 to-gray-800 dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-700 dark:to-gray-600">
      <div className="max-w-screen-lg w-full px-4">
       
        <Hero />
     
        <Projects />
        <Repos />
       
      </div>
    </div>
  );
};

export default Portfolio;
