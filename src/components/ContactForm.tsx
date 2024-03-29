import React, { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const ContactForm: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    };

    const name = target.name.value;
    const email = target.email.value;
    const message = target.message.value;

    try {
      await axios.post("http://localhost:3001/send-email", {
        name,
        email,
        message,
      });
      alert("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error, error.response);
      alert("Failed to send email");
    }
  };

  const emphasisVariants = {
    initial: {
      backgroundColor: "transparent",
      color: "#10B981",
      fontWeight: "normal",
    },
    hover: {
      backgroundColor: "#10B981",
      color: "#10B981",
      fontWeight: "bold",
    },
  };

  return (
    <>
      <button
        className="bg-gray-500 text-white mt-4 font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
        onClick={toggleFormVisibility}
        id="contact"
      >
        Contact Me
      </button>
      <AnimatePresence>
        {isFormVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center"
            variants={emphasisVariants}
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
              <form onSubmit={handleSubmit}>
                <label
                  className="block mb-2 font-bold text-gray-800"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                />
                <label
                  className="block mt-4 mb-2 font-bold text-gray-800"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
                <label
                  className="block mt-4 mb-2 font-bold text-gray-800"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                  id="message"
                  rows="4"
                  placeholder="Enter your message"
                ></textarea>
                <button
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline mt-4"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
              <motion.button
                className="absolute top-0 right-0 mr-14 mt-14 text-gray-600 hover:text-gray-800"
                onClick={toggleFormVisibility}
                variants={emphasisVariants}
                whileHover="hover"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12.707,12l4.147-4.146c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L12,10.586l-4.146-4.146c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L10.586,12l-4.146,4.147c-0.391,0.391-0.391,1.023,0,1.414     s0.707,0.707,1.414,0L12,13.414l4.146,4.147c0.391,0.391,1.023,0.391,1.414,0s0.391-1.023,0-1.414L12.707,12z"
                  />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactForm;
