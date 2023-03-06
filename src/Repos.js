import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const username = "papercircuit";

const Repos = ({ username }) => {
  const [repos, setRepos] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const reposToShow = showMore ? repos.length : 4;

  useEffect(() => {
    async function fetchRepos() {
      const response = await fetch(
        `https://api.github.com/users/papercircuit/repos`
      );
      const data = await response.json();
      setRepos(data.filter((repo) => !repo.fork));
    }
    fetchRepos();
  }, []);

  const handleShowMore = () => {
    setShowMore(true);
  };

  const variants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    hidden: { opacity: 0 },
  };

  const itemVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -10, opacity: 0 },
  };

  return (
    <div className="my-10 mx-5">
      <h2 className="text-3xl font-bold mb-4">Recent Github Repos:</h2>
      <motion.ul
        className="divide-y divide-gray-300"
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        {repos.slice(0, reposToShow).map((repo) => (
          <motion.li
            key={repo.id}
            className="w-full py-4"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            variants={itemVariants}
          >
            <a href={repo.html_url} className="text-blue-500 dark:text-blue-200 font-bold">
              {repo.name}
            </a>
            <p className="text-gray-600 mt-2 dark:text-gray-400">{repo.description}</p>
            <p className="text-gray-600 mt-2 dark:text-gray-400">
              <em>{repo.language}</em>
            </p>
          </motion.li>
        ))}
      </motion.ul>
      {!showMore && repos.length > 4 && (
        <button
          onClick={handleShowMore}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Show more
        </button>
      )}
    </div>
  );
};

export default Repos;
