import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MenuSelector from "./components/MenuSelector";
import Food from "./pages/Food";
import Drinks from "./pages/Drinks";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MenuSelector />} />
          <Route path="/food" element={<Food />} />
          <Route path="/drinks" element={<Drinks />} />
        </Routes>
      </BrowserRouter>
      <MenuSelector />
    </div>
  );
}

export default App;
