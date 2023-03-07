import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";
import { data } from "./data";
import Hero from "./Hero";
import Footer from "./Footer";
import DarkModeToggle from "./DarkModeButton";
import Repos from "./Repos";
import Logo from "./Logo";

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
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-700 dark:to-gray-600">

      <div className="max-w-screen-lg w-full px-4">
        <div className="flex justify-between items-center py-4">
          {/* <div className="text-gray-900 dark:text-white font-bold text-lg">
            Kenny Johnson
          </div> */}
          <Logo darkMode={darkMode} />

            <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>

        <Hero />

        <div className="grid grid-cols-1 gap-7 my-10">
          {data.map((project) => (
            <motion.div
              className="portfolio-item max-w-lg mx-auto"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              whileHover={{ scale: 1.05 }}
              key={project.id}
            >
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
                <motion.img
                  className="object-cover w-full h-auto"
                  src={project.img}
                  alt="portfolio item"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                />
                <div className="p-4">
                  <motion.div
                    className="text-gray-900 dark:text-white font-bold mb-2"
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    {project.name}
                  </motion.div>
                  <motion.div
                    className="text-gray-600 dark:text-gray-400 text-sm"
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    {project.description}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <Repos />
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
