import React, { useState } from "react";
import HeaderComponent from "../header/HeaderComponent"
import LeftPage from "./LeftPage";
import RightPage from "./RightPage";
import Selesai from "../Utils/selesai";
function App() {
  //BUAT TOMBOL 1
  const [show1, setShow1] = useState(false);

  const click1 = () => {
    setShow1(!show1);
  };

  //CEK RESPONSE CONSOLE
  console.log(show1);

  //BUAT TOMBOL 2
  const [show2, setShow2] = useState(false);

  const click2 = () => {
    setShow2(!show2);
  };

  //CEK RESPONSE CONSOLE
  console.log(show2);

  return (
    <>
      <div className="md:max-h-screen md:h-screen h-[115vh] w-full md:bg-[#cec9b3] bg-[#cec9b3] md:pb-0 pb-8">
        <HeaderComponent />
        <div className="flex w-full h-[15vh] md:h-[15vh] md:justify-center md:items-center">
          <div className="flex justify-around items-center w-full md:w-[60%] h-full">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-slate-500 to-slate-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm 
                            px-5 py-2.5 text-center mr-2 mb-2 border-2 border-white"
              onClick={click1}
            >
              Tombol 1
            </button>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-slate-500 to-slate-600  hover:bg-gradient-to-bl font-medium rounded-lg text-sm 
                            px-5 py-2.5 text-center mr-2 mb-2 border-2 border-white"
              onClick={click2}
            >
              Tombol 2
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly items-center w-full h-[70%] md:h-[65vh] gap-5 md:gap-0">
          {show1 && <LeftPage />}
          {show2 && <RightPage />}
        </div>
        <div className="w-full p-5">
          <Selesai />
        </div>
      </div>
    </>
  );
}

export default App;
