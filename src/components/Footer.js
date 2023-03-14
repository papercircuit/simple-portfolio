import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-100 dark:bg-gray-800 py-10"
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
          <p className="text-sm mt-2 text-gray-500">
            <a href="mailto:kenny.johnson.nyc@gmail.com"></a>
            kenny.johnson.nyc@gmail.com
          </p>
        </div>
        <div className="text-center mt-4 md:mt-0">
          <div className="flex justify-center mt-2"></div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
