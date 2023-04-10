import React, { useState, useEffect, ChangeEvent } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "devicon/devicon.min.css";


interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  fork: boolean;
}

const Repos: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [showMore, setShowMore] = useState(false);
  const [sortBy, setSortBy] = useState("updated"); // default sort by created date
  const [filterBy, setFilterBy] = useState(""); // default filter by empty string
  const [sortDirection, setSortDirection] = useState("desc"); // default sort direction descending
  const reposToShow = showMore ? repos.length : 4;

  useEffect(() => {
    async function fetchRepos() {
      const response = await axios.get(
        `https://api.github.com/users/papercircuit/repos?sort=${sortBy}&direction=${sortDirection}`
      );
      const data: Repo[] = response.data;
      setRepos(data.filter((repo) => !repo.fork));
    }
    fetchRepos();
  }, [sortBy, sortDirection]);

  const handleShowMore = () => {
    setShowMore(true);
  };

  const handleSortBy = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  const handleSortDirection = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortDirection(event.target.value);
  };

  const filteredRepos = repos.filter(
    (repo) =>
      repo.name.toLowerCase().includes(filterBy.toLowerCase()) || // filter by name
      (repo.description &&
        repo.description.toLowerCase().includes(filterBy.toLowerCase())) // filter by description
  );

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

  const getLanguageIcon = (language: string) => {
    if (!language) {
      return "";
    }
    const languageLowerCase = language.toLowerCase();
    switch (languageLowerCase) {
      case "javascript":
        return "devicon-javascript-plain";
      case "typescript":
        return "devicon-typescript-plain";
      case "python":
        return "devicon-python-plain";
      case "html":
        return "devicon-html5-plain";
      case "css":
        return "devicon-css3-plain";
      case "java":
        return "devicon-java-plain";
      case "c":
        return "devicon-c-plain";
      case "c++":
        return "devicon-cplusplus-plain";
      // Add more cases for other languages you want to support
      default:
        return ""; // Return an empty string if the language is not supported
    }
  };


  return (
    <div className="my-10 mx-5 px-10">
      <h2 className="text-3xl font-bold mb-4 py-2 dark:text-gray-200 text-gray-800 border-b-4 border-gray-700 dark:border-gray-300 mx-auto">
        Recent Github Repos
      </h2>
      <div className="mb-4 flex flex-col md:flex-row ">
        <label
          htmlFor="sort-by"
          className="mr-2 my-auto dark:text-gray-200 text-gray-800"
        >
          Sort by:
        </label>
        <select
          id="sort-by"
          value={sortBy}
          onChange={handleSortBy}
          className="rounded-md text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 py-2 px-4 focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="updated">Last updated</option>
          <option value="created">Created date</option>
        </select>
        <label
          htmlFor="sort-direction"
          className="ml-4 my-auto mr-2 dark:text-gray-200 text-gray-800"
        >
          Sort direction:
        </label>
        <select
          id="sort-direction"
          value={sortDirection}
          onChange={handleSortDirection}
          className="rounded-md text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 py-2 px-4 focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>
      <motion.ul
        className="divide-y divide-gray-300"
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        {filteredRepos.slice(0, reposToShow).map((repo) => (
          <motion.li
            key={repo.id}
            className="py-4"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold dark:text-gray-200 text-gray-800"
                >
                  {repo.name}
                </a>
                <p className="text-gray-600 dark:text-gray-400 text-sm pr-10">
                  {repo.description}
                </p>
              </div>
              <div className="flex flex-col items-end bg-black">
               <i className={`devicon ${getLanguageIcon(repo.language)} colored text-xl`}></i>

              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
      {filteredRepos.length > 4 && !showMore && (
        <button
          className="bg-gray-200 dark:bg-gray-800 dark:text-gray-200 text-gray-800 rounded-md px-4 py-2 mt-4"
          onClick={handleShowMore}
        >
          Show more
        </button>
      )}
    </div>
  );
};

export default Repos;
