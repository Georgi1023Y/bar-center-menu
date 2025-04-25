import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import MenuSelector from "./components/MenuSelector";
import Drinks from "./pages/Drinks";
import Food from "./pages/Food";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuSelector />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/food" element={<Food />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
