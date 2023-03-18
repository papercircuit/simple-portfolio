import React, { useState, useEffect } from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Background from "./pages/Background";
import FaviconView from "./pages/FaviconView";
import Favicon from "./components/Favicon";
import About from "./pages/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

<BrowserRouter>
  <App />
</BrowserRouter>;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (darkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Favicon />
      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route exact path="/" element={<Portfolio />} />
        <Route exact path="/background" element={<Background />} />
        <Route exact path="/favicon-view" element={<FaviconView />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
