import React, { useState }from "react";
import { motion } from "framer-motion";

const Logo = ({ darkMode }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className="w-20 h-20"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.2 }}
    >
      <motion.rect
        x="25"
        y="25"
        width="150"
        height="150"
        rx="20"
        fill={darkMode ? "#fff" : "#000"}
        initial={{ x: "-50%", y: "-50%", opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      />
      <motion.text
        x="50%"
        y="53%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill={darkMode ? "#000" : "#fff"}
        fontSize="70"
        fontWeight="bold"
        fontFamily="sans-serif"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        KJ
      </motion.text>
    </motion.svg>
  );
};

export default Logo;
