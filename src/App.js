import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "./Portfolio";
import Background from "./Background";
import FaviconView from "./FaviconView";
import Favicon from "./Favicon";

<BrowserRouter>
  <App />
</BrowserRouter>

function App() {
  return (
    <div>
      <Favicon />
      <Routes>
        <Route exact path="/" element={<Portfolio />} />
        <Route exact path="/background" element={<Background />} />
        <Route exact path="/favicon-view" element={<FaviconView />} />
      </Routes>
    </div>
  );
}

export default App;
