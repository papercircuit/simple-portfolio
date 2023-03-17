import { motion } from "framer-motion";
import KJLOGO from "../assets/KJ-1.png";

const Logo = ({ darkMode }) => {

  function reloadPage() {
    window.location.reload();
  }

  return (
    <motion.div
      className={`w-40 h-20 overflow-hidden`}
      whileTap={{ scale: 0.95 }}
    >
      <motion.img
        src={KJLOGO}
        alt="KJ Logo"
        className="w-full h-full rounded-full object-cover"
        style={{ filter: darkMode ? "invert(1)" : "none" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        onClick={reloadPage}
      />
    </motion.div>
  );
};

export default Logo;
