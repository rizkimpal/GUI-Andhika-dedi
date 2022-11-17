import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageOne from "./pages/PageOne";
import Trypage from "./pages/Trypage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<PageOne />} />
      <Route path="/asuu" element={<PageOne />} />
      <Route path="/coba" element={<Trypage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
