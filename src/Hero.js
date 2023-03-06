import React from "react";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

const Hero = () => {

  return (
    <div className="max-w-screen-lg w-full px-4 py-8">
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
          Hi, I'm Kenny,
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
            a front-end developer based in New York City. I enjoy building fast and fun websites.
          
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
