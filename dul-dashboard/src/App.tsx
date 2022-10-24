import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageOne from "./pages/PageOne";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<PageOne />} />
      <Route path="/asuu" element={<PageOne />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
