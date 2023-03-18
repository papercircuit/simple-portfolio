import { data } from "../data";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Projects = () => {
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
  return (
    <div id="projects" className="max-w-screen-lg px-10">
      <motion.h2
        className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        Current Projects
      </motion.h2>
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={false}
        interval={5000}
        transitionTime={200}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
        useKeyboardArrows={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute left-8 top-[40%] transform z-10 w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center"
            >
              <svg
                className="w-6 h-6 text-gray-900 dark:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute right-8 top-[40%] transform  z-10 w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center"
            >
              <svg
                className="w-6 h-6 text-gray-900 dark:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          )
        }
      >
        {data.map((project) => (
          <motion.div
            className="portfolio-item max-w-lg mx-auto"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            whileHover={{ scale: 1.05 }}
            key={project.id}
          >
            <a href={project.link} target="_blank" rel="noreferrer">
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
                <motion.img
                  className="object-cover w-full h-auto"
                  src={project.img}
                  alt="portfolio item"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                />
                <div className="p-4">
                  <motion.div
                    className="text-gray-900 dark:text-white font-bold mb-2"
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    {project.name}
                  </motion.div>
                  <motion.div
                    className="text-gray-600 dark:text-gray-400 text-sm"
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    {project.description}
                  </motion.div>
                  <motion.div
                    className="text-gray-600 dark:text-gray-400 text-sm"
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    {project.tech}
                  </motion.div>
                  <motion.div
                    className="text-gray-600 dark:text-gray-400 text-sm py-4"
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <a href={project.link} target="_blank" rel="noreferrer">
                      {project.link}
                    </a>
                  </motion.div>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </Carousel>
    </div>
  );
};

export default Projects;
