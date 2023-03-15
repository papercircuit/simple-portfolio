import { motion } from "framer-motion";
import KJLOGO from "../assets/KJ-1.png";
import { useEffect, useState } from "react";

const Logo = ({ darkMode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(darkMode);
  }, [darkMode]);

  return (
    <motion.div
      className={`w-40 h-20 overflow-hidden ${
        darkMode ? "filter invert(1)" : ""
      }`}
    >
      <motion.img
        src={KJLOGO}
        alt="KJ Logo"
        className="w-full h-full object-cover"
        style={{ filter: darkMode ? "brightness(150%)" : "none" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </motion.div>
  );
};

export default Logo;
