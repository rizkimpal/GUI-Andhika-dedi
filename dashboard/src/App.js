import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeftPage from "./Component/mainPage/LeftPage";
import RightPage from "./Component/mainPage/RightPage";

const MainPage = React.lazy(() => import("./pages/MainPage"));
const ImagePage = React.lazy(() => import("./pages/ImagePage"));

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/right" element={<RightPage />} />
            <Route path="/left" element={<LeftPage />} />
            <Route path="/image" element={<ImagePage />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
