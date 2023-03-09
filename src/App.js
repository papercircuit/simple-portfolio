import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Background from "./pages/Background";
import FaviconView from "./pages/FaviconView";
import Favicon from "./components/Favicon";

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
