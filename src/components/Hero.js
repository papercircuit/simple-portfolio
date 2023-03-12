import React from "react";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

const Hero = () => {

  const emphasisVariants = {
    hover: {
      color: "#10B981",
      fontWeight: "bold"
    }
  };

  return (
    <div className="max-w-screen-lg w-full h-screen px-10 py-20 border-l-2 border-gray-300 dark:border-gray-600">
      <div className="flex justify-between items-center">
      </div>
      <div className="mt-8">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          Hi, I'm{" "}
          <motion.span
            className="cursor-pointer"
            variants={emphasisVariants}
            whileHover="hover"
          >
            <a href="https://www.linkedin.com/in/kenny-johnson-nyc/" target="_blank" rel="noreferrer">Kenny</a>
          </motion.span>
          ,
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 mt-4 leading-relaxed"
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
            bold and fun websites.
          </motion.span>{" "}
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
