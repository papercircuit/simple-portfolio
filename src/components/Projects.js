import { data } from "../data";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="grid grid-cols-1 gap-7 my-10">
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
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
