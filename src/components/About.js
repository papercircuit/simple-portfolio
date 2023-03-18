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
    },
    dark: {
      color: "white",
      fontWeight: "inherit",
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
          My journey into software development began with a spark of curiosity
          that has since blossomed into a deep passion. With a 10-year
          background in the music industry as a touring musician, I bring a
          unique perspective and creative approach to my work. Seeking to
          formalize my education and connect with like-minded individuals, I
          attended a{" "}
          <motion.span variants={emphasisVariants} whileHover="hover">
            <a href="htts://www.fullstackacademy.com">coding bootcamp </a>
          </motion.span>
          This experience not only expanded my technical knowledge but also
          equipped me with the skills to thrive in the ever-evolving world of
          software development.
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mx-auto max-w-prose mt-4"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            Today, I specialize in crafting functional, fast, and visually
            appealing websites using cutting-edge technologies like React,
            Shopify, and TailwindCSS. My extensive experience in the creative
            field, combined with my technical expertise, enables me to deliver
            innovative and engaging digital experiences that resonate with
            users.
          </motion.p>
        </motion.p>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mx-auto max-w-prose mt-4"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          Feel free to explore my portfolio to see the projects I've worked on
          and the impact I've made in the industry. If you'd like to collaborate
          or simply connect, please don't hesitate to get in touch!
        </motion.p>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mx-auto max-w-prose mt-4"
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
    </section>
  );
};

export default About;
