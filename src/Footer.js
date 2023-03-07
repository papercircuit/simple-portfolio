import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="dark:bg-gray-900 text-gray-100 py-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <p className="text-lg font-bold dark:text-white text-gray-500">Kenny Johnson</p>
          <p className="text-sm mt-2 text-gray-500">
            New York, NY 10032
          </p>
          <p className="text-sm mt-2 text-gray-500">kenny.johnson.nyc@gmail.com</p>
        </div>
        <div className="text-center mt-4 md:mt-0">
          <div className="flex justify-center md:justify-start mt-2">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-100 transition-colors duration-200 mx-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-100 transition-colors duration-200 mx-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-100 transition-colors duration-200 mx-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 2H4a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2V4a2 2 0 00-2-2zM13 2v5h5"
                />
              </svg>
            </a>
          </div>
        </div>
        
      </div>
    </motion.footer>
  );
};

export default Footer;
