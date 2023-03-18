import satelliteVisualization from "./assets/gifs/satellites.gif";
import leaves from "./assets/gifs/leaves.gif";
import portfolio from "./assets/portfolio.png";

export const data = [
  {
    id: 1,
    name: "Satellite Visualizer",
    description:
      "Built with Vanilla JS, Highcharts.js, HTML, and CSS. This project uses the NASA API to display satellite location data in a 3D environment.",
    img: satelliteVisualization,
    link: "https://github.com/papercircuit/DSCOVR-ACE-Visualizer",
  },
  {
    id: 2,
    name: "Increment a Counter Using React Hooks",
    description:
      "Built with React, HTML, and CSS. This project uses React Hooks to increment a counter for example and (hopefully) educational purposes.",
    img: "https://github.com/papercircuit/react-hooks-counter-examples/blob/master/public/screenshot.png?raw=true",
    link: "https://github.com/papercircuit/increment-counter-using-react-hooks",
  },
  {
    id: 2,
    name: "Oak and Cherry",
    description:
      "This project uses P5.js to create a falling leaves effect.",
    img: leaves,
    link: "https://github.com/papercircuit/oak-and-cherry",
  },
  {
    id: 3,
    name: "Worm's Eye View",
    description:
      "Uses React, Firebase, and multiple Restful APIs to give the user a location and time specific, selection of plants that will grow in their area.",
    img: "https://github.com/team-mind-capstone/worms-eye-view/blob/master/readmeAssets/home_plant_sug.jpg?raw=true",
    link: "https://github.com/team-mind-capstone/worms-eye-view",
  },
  {
    id: 4,
    name: "This Portfolio",
    description:
      "Built with React, Framer Motion, and Tailwind CSS. This portfolio is a work in progress and will be updated as I learn more.",
    img: portfolio,
    link: "https://github.com/papercircuit/simple-portfolio",
  },
];
