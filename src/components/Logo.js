import { motion } from "framer-motion";
import KJLOGO from "../assets/KJ-1.png";

const Logo = ({ darkMode }) => {
  return (
    <motion.div
      className="w-40 h-20 overflow-hidden shadow-lg border-2 border-gray-300 dark:border-gray-400 bg-white relative"
      whileHover={{
        scale: 1.05,
        rotate: [0, -2, 2, -2, 2, -2, 0],
      }}
      whileTap={{ scale: 0.95, borderRadius: "12%" }}
      onClick={() => {
        window.location.reload();
      }}
    >
      <motion.img
        src={KJLOGO}
        alt="KJ Logo"
        className="w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="w-full h-full absolute top-0 left-0 border-2 border-gray-300 dark:border-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>
      <motion.div
        className="w-full h-full absolute top-0 left-0 border-2 border-gray-300 dark:border-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      ></motion.div>
      <motion.div
        className="w-full h-full absolute top-0 left-0 border-2 border-gray-300 dark:border-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      ></motion.div>
    </motion.div>
  );
};

export default Logo;
