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
      fontWeight: "bold",
    },
    dark: {
      color: "white",
      fontWeight: "inherit",
    },
  };

  return (
    <div className="max-w-screen-lg min-h-screen h-full w-full px-10 py-20 relative">
      <div className="mt-12 relative">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
        >
          Hi, I'm{" "}
          <motion.span
            variants={emphasisVariants}
            whileHover="hover"
          >
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
            functional and fast websites.
          </motion.span>{" "}
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
