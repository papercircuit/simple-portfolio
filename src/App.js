import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Portfolio from "./Portfolio";
import Background from "./Background";
import FaviconView from "./FaviconView";
import Favicon from "./Favicon";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

function App() {
  return (
    <div>
      <head>
        <Favicon />
      </head>
      <Routes>
        <Route exact path="/" element={<Portfolio />} />
        <Route exact path="/background" element={<Background />} />
        <Route exact path="/favicon-view" element={<FaviconView />} />
      </Routes>
    </div>
  );
}

export default App;
