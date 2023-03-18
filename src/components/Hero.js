import React from "react";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";
import Avatar from "../assets/kenny.jpeg";

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

  const shakeVariants = {
    initial: {}, // Add this line
    hover: {
      x: [0, -3, 3, -3, 3, 0],
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="px-10 pt-10 md:pt-20 relative flex flex-col md:flex-row justify-between">
      <div className="h-full my-auto relative pr-4 border-r-0 md:border-r-4 border-gray-700 dark:border-gray-300">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
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
            front-end developer,
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
      
      <div className="relative min-w-[60%] w-xl md:w-full h-[50vh] md:h-[63vh] dark:border-gray-200 rounded-sm overflow-hidden mt-6 md:mt-0 md:ml-6">
        <motion.img
          src={Avatar}
          className="absolute top-0 left-0 w-full h-full object-cover px-20 md:px-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          variants={shakeVariants} // Apply shakeVariants
          whileHover="hover" // Add this prop
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.7,
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
