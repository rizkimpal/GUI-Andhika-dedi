import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageOne from "./pages/PageOne";
import Recorder from "./Component/Utils/Recorder";
import MainMenu from "./Component/mainPage/Main";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Recorder />} />
      <Route path="/asuu" element={<MainMenu />} />
      <Route path="/coba" element={<PageOne />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;