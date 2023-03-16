import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";
import Avatar from "../assets/kenny.jpeg";

const Hero = () => {
  const [showAvatar, setShowAvatar] = useState(false);

  const emphasisVariants = {
    hover: {
      color: "#10B981",
      fontWeight: "bold",
    },
  };

  const avatarVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    setShowAvatar(showAvatar);
  }, [showAvatar]);
  const handleMouseEnter = () => {
    setShowAvatar(true);
  };

  const handleMouseLeave = () => {
    setShowAvatar(false);
  };

  // Use the useEffect hook to update the variant property of the motion.div based on the showAvatar state
  useEffect(() => {
    const variant = showAvatar ? "visible" : "hidden";
    const avatarDiv = document.getElementById("avatarDiv");
    avatarDiv.classList.remove("hidden");
    avatarDiv.classList.add("block");
    avatarDiv.classList.add(variant);
  }, [showAvatar]);

  return (
    <div className="max-w-screen-lg h-full w-full px-10 py-20 relative">
    
      <div className="flex justify-between items-center"></div>
      <div className="mt-8 relative">
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
            className="cursor-pointer"
            variants={emphasisVariants}
            whileHover="hover"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="https://www.linkedin.com/in/kenny-johnson-nyc/"
              target="_blank"
              rel="noreferrer"
            >
              Kenny
            </a>
          </motion.span>
          ,
        </motion.h1>
        {/* Add the motion.div element for the avatar */}
        <motion.div
          className="hidden absolute bottom-0 pointer-events-none"
          id="avatarDiv"
          variants={avatarVariants}
          initial="hidden"
          animate={showAvatar ? "visible" : "hidden"}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <img
            className="w-40 h-40 object-cover position-relative left-1/2 transform -translate-x-1/2 transform-translate-y-1/2"
            src={Avatar}
            alt="Avatar"
          />
        </motion.div>
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
