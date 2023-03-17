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
      fontWeight: "bold",
    },
    dark: {
      color: "white",
      fontWeight: "inherit",
    },
  };

  const shakeVariants = {
    hover: {
      x: [0, -3, 3, -3, 3, 0],
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="px-10 py-0 relative mt-10 md:mt-20 flex flex-col md:flex-row md:py-20 justify-between">
      <div className="mt-14 md:mt-2 relative">
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
      <div className="relative min-w-10 w-full h-[50vh] md:h-[63vh] dark:border-gray-200 rounded-sm overflow-hidden mt-6 md:mt-0 md:ml-6">
        <motion.img
          src={Avatar}
          className="absolute top-0 left-0 w-full h-full object-cover px-20 md:px-10
          "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
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
