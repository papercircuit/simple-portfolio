import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const Footer = ({ darkMode }) => {
  const logoClasses = "text-2xl w-20 h-20 mx-2 dark:text-white text-gray-500";

  return (
    <motion.footer
      className="border-t-4 py-20 md:py-40 border-gray-700 dark:border-gray-300
      dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col md:flex-row justify-center items-center">
        <div className="text-center">
          <p className="text-lg font-bold dark:text-white text-gray-500">
            Kenny Johnson
          </p>
          <p className="text-sm mt-2 text-gray-500">New York, NY</p>
          <p className="text-sm mt-2 text-gray-500">2023</p>
          {/* Social Media Icons */}
          <div className="mt-4 flex justify-center">
            <a
              href="https://github.com/paper-circuit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`fab fa-github ${logoClasses}`}></i>
            </a>
            <a
              href="https://www.linkedin.com/in/kenny-johnson-nyc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`fab fa-linkedin-in ${logoClasses}`}></i>
            </a>
          </div>
          {/* <ContactForm  /> */}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
