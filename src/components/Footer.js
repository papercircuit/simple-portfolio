import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const Footer = () => {

  return (
    <motion.footer
      className="border-t-2 border-gray-700 dark:border-gray-200
       py-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col md:flex-row justify-center items-center">
        <div className="text-center">
          <p className="text-lg font-bold dark:text-white text-gray-500">
            Kenny Johnson
          </p>
          <p className="text-sm mt-2 text-gray-500">New York, NY 10032</p>
        <ContactForm  />
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
