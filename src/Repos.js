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
      setRepos(data);
    }
    fetchRepos();
  }, []);

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">My Repositories:</h2>
      <ul className="divide-y divide-gray-300">
        {repos.slice(0, reposToShow).map((repo) => (
          <motion.li
            key={repo.id}
            className="w-full py-4"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <a href={repo.html_url} className="text-blue-500 font-bold">
              {repo.name}
            </a>
            <p className="text-gray-600 mt-2">{repo.description}</p>
            <p className="text-gray-600 mt-2">
              <em>{repo.language}</em>
            </p>
          </motion.li>
        ))}
      </ul>
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
