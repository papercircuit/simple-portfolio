import React from "react";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";
import Avatar from "../assets/kenny.jpeg";

const About = ({ darkMode }) => {
  const textVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.2,
      },
    },
  };

  const emphasisVariants = {
    default: {
      color: "inherit",
      fontWeight: "inherit",
    },
    hover: {
      color: "#10B981",
    },
    dark: {
      color: "white",
      fontWeight: "inherit",
    },
  };

  const shakeVariants = {
    initial: {},
    hover: {
      x: [0, -3, 3, -3, 3, 0],
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="mx-auto px-10 pb-20 pt-20 flex flex-col md:flex-row dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-700 dark:to-gray-600"
    >
      <div className="text-left">
        <motion.h2
          className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-md text-gray-600 dark:text-gray-400 leading-relaxed mx-auto max-w-prose"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          My journey into software development began with a spark of curiosity
          that has since blossomed into a passion. With a 10-year background in
          the music industry as a touring musician, I bring a unique perspective
          and creative approach to my work. Seeking to formalize my education
          and connect with like-minded individuals, I attended a{" "}
          <motion.span variants={emphasisVariants} whileHover="hover">
            <a href="htts://www.fullstackacademy.com">coding bootcamp. </a>
          </motion.span>
          This experience not only expanded my technical knowledge but also
          equipped me with the skills to thrive in the ever-evolving world of
          software development.
          <motion.p
            className="text-md text-gray-600 dark:text-gray-400 leading-relaxed mx-auto max-w-prose mt-4"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            Today, I specialize in crafting functional, fast, and visually
            appealing websites using technologies like React, Shopify, and
            TailwindCSS.
          </motion.p>
        </motion.p>
        <motion.p
          className="text-md text-gray-600 dark:text-gray-400 leading-relaxed mx-auto max-w-prose mt-4"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          Feel free to explore my portfolio to see the projects I've worked on
          and the impact I've made in the industry. If you'd like to collaborate
          or simply connect, please don't hesitate to get in touch!
        </motion.p>
        <motion.p
          className="text-md text-gray-600 dark:text-gray-400 leading-relaxed mx-auto max-w-prose mt-4"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          When I'm not coding, you can find me exploring the city on two wheel,
          making music, or petting my cats. Want to work together?{" "}
          <motion.span
            className="cursor-pointer"
            variants={emphasisVariants}
            whileHover="hover"
          >
            <a
              href="mailto:kenny.johnson.nyc@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Let's chat
            </a>
          </motion.span>
          .
        </motion.p>
     
      </div>
      <div className="relative flex align-center px-20 justify-middle min-w-[40%] h-[50vh] md:h-[63vh] dark:border-gray-200 rounded-sm overflow-hidden mt-6 md:ml-6 ">
        <motion.img
          src={Avatar}
          className="absolute top-0 left-0 w-full h-full object-cover px-20 md:px-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          variants={shakeVariants} // Apply shakeVariants
          whileHover="hover" // Add this prop
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.7,
          }}
        />
      </div>
    </section>
  );
};

export default About;
