import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeftPage from "./Component/mainPage/LeftPage";
import RightPage from "./Component/mainPage/RightPage";
import TryMain from "./Component/mainPage/TryMain";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<TryMain />} />
      <Route path="/nabila" element={<RightPage />} />
      <Route path="/coba" element={<LeftPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;