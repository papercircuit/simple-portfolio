import React from "react";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

const About = () => {
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
      fontWeight: "bold",
    },
  };

  return (
    <section id="about" className="max-w-screen-lg mx-auto px-4 pb-20 pt-20">
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
          className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mx-auto max-w-prose"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          I'm a front-end developer based in New York City. My journey in software began with a curiosity for how things work and a love for design. From there, I taught myself the basics and eventually went on to attend a coding bootcamp to formalize my education. Since then, I've been building functional and fast websites using modern technologies like React and TailwindCSS.
        </motion.p>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mx-auto max-w-prose mt-4"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          When I'm not coding, you can find me exploring the city, trying new restaurants, and watching movies.
        </motion.p>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mx-auto max-w-prose mt-4"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          Want to work together?{" "}
          <motion.span
            className="cursor-pointer"
            variants={emphasisVariants}
            whileHover="hover"
          >
            <a
              href="https://www.linkedin.com/in/kenny-johnson-nyc/"
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
    </section>
  );
};

export default About;
