import { useState } from "react";
import { Transition } from "react-transition-group";
import { gsap } from "gsap";
import 'tailwindcss/tailwind.css';


const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const animatePortfolioItems = (items) => {
    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: index * 0.1,
          ease: "power2.out",
        }
      );
    });
  };

  const handlePortfolioEnter = (node) => {
    animatePortfolioItems(node.querySelectorAll(".portfolio-item"));
  };

  const handlePortfolioExit = (node) => {
    gsap.to(node, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <div className={`container ${darkMode ? "dark" : ""}`}>
      <div className="flex justify-between items-center py-4">
        <div className="text-gray-900 dark:text-white font-bold text-lg">
          My Portfolio
        </div>
        <button
          className="bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 rounded-lg px-4 py-2"
          onClick={toggleDarkMode}
        >
          {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Transition
          in={true}
          appear={true}
          timeout={500}
          onEnter={handlePortfolioEnter}
          onExit={handlePortfolioExit}
        >
          {(status) => (
            <div
              className={`portfolio-section ${
                status === "entered" ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="portfolio-item">
                <div className="bg-gray-200 dark:bg-gray-700 h-64 rounded-lg shadow-lg overflow-hidden">
                  <img
                    className="object-cover w-full h-full"
                    src="https://images.unsplash.com/photo-1620266966718-63e63b04eb21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjI4MzN8MHwxfHNlYXJjaHwyfHxwb3J0Zm9saW8lMjB3ZWJzaXRlfGVufDB8fHx8MTYyNTAzNzgxMg&ixlib=rb-1.2.1&q=80&w=1080"
                    alt="portfolio item"
                  />
                  <div className="p-4">
                    <div className="text-gray-900 dark:text-white font-bold mb-2">
                      Portfolio Item 1
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus vulputate justo id eros ultrices, sit amet
                      aliquet nulla tincidunt. Maecenas feugiat sodales
                      condiment
                    </p>
                  </div>
                </div>
              </div>
              <div className="portfolio-item">
                <div className="bg-gray-200 dark:bg-gray-700 h-64 rounded-lg shadow-lg overflow-hidden">
                  <img
                    className="object-cover w-full h-full"
                    src="https://images.unsplash.com/photo-1620266966718-63e63b04eb21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjI4MzN8MHwxfHNlYXJjaHwyfHxwb3J0Zm9saW8lMjB3ZWJzaXRlfGVufDB8fHx8MTYyNTAzNzgxMg&ixlib=rb-1.2.1&q=80&w=1080"
                    alt="portfolio item"
                  />
                  <div className="p-4">
                    <div className="text-gray-900 dark:text-white font-bold mb-2">
                      Portfolio Item 2
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus vulputate justo id eros ultrices, sit amet
                      aliquet nulla tincidunt. Maecenas feugiat sodales
                      condimentum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="portfolio-item">
                <div className="bg-gray-200 dark:bg-gray-700 h-64 rounded-lg shadow-lg overflow-hidden">
                  <img
                    className="object-cover w-full h-full"
                    src="https://images.unsplash.com/photo-1620266966718-63e63b04eb21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjI4MzN8MHwxfHNlYXJjaHwyfHxwb3J0Zm9saW8lMjB3ZWJzaXRlfGVufDB8fHx8MTYyNTAzNzgxMg&ixlib=rb-1.2.1&q=80&w=1080"
                    alt="portfolio item"
                  />
                  <div className="p-4">
                    <div className="text-gray-900 dark:text-white font-bold mb-2">
                      Portfolio Item 3
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus vulputate justo id eros ultrices, sit amet
                      aliquet nulla tincidunt. Maecenas feugiat sodales
                      condimentum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </div>
    </div>
  );
};

export default Portfolio;
