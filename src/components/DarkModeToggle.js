import { motion } from "framer-motion";

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center align-middle justify-center w-10 h-10 rounded-full border border-gray-400 focus:outline-none hover:bg-gray-500 dark:hover:bg-gray-500
      "
    >
      <motion.svg
        width="24"
        height="24"
        viewBox="0 0 24 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ rotate: isDarkMode ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {isDarkMode ? (
          <path
            d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
            fill="#FCD34D"
          />
        ) : (
          <path
            d="M12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3Z"
            fill="#1F2937"
          />
        )}
        <motion.path
          d="M12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6Z"
          fill="#FFFFFF"
          animate={{ opacity: isDarkMode ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.path
          d="M12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8Z"
          fill="#1F2937"
          animate={{ opacity: isDarkMode ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.svg>
    </button>
  );
};

export default DarkModeToggle;
