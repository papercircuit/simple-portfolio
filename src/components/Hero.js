import React from "react";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

const Hero = () => {
  const emphasisVariants = {
    default: {
      color: "inherit",
      fontWeight: "inherit",
    },
    hover: {
      color: "#10B981",
    },
    dark: {
      color: "white",
      fontWeight: "inherit",
    },
  };

  //  scroll down smoothly to the next section
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("projects");
    aboutSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="h-[50vh] md:min-h-[90vh] px-10 relative flex flex-col justify-between">
      <div className="my-auto relative pr-4 border-r-0 md:border-r-4 border-gray-700 dark:border-gray-300">
        <motion.h1
          className="text-4xl pt-2 md:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
        >
          Hi, I'm{" "}
          <motion.span variants={emphasisVariants} whileHover="hover">
            <motion.a
              href="https://www.linkedin.com/in/kenny-johnson-nyc/"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer"
              whileHover="hover"
            >
              Kenny
            </motion.a>
          </motion.span>
          ,
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 mt-4 leading relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.2,
          }}
        >
          {" "}
          a{" "}
          <motion.span
            className="cursor-pointer"
            variants={emphasisVariants}
            whileHover="hover"
          >
            software developer,
          </motion.span>{" "}
          based in New York City. I enjoy building{" "}
          <motion.span
            className="cursor-pointer"
            variants={emphasisVariants}
            whileHover="hover"
          >
            fast and functional websites.
          </motion.span>{" "}
        </motion.p>
      </div>
      <motion.button
        className="text-black text-xl dark:text-gray-200 px-4 py-2 rounded-md my-8 hover:bg-gray-300 dark:hover:bg-gray-600"
        whileHover="hover"
        onClick={scrollToNextSection}
        variants={emphasisVariants}
      >
        ↓
      </motion.button>
    </div>
  );
};

export default Hero;
