import React, { useState } from "react";
import HeaderComponent from "../Component/header/HeaderComponent";
import LeftPage from "../Component/mainPage/LeftPage";
import RightPage from "../Component/mainPage/RightPage";
import Choice from "../Component/mainPage/Choice";
import Selesai from "../Component/mainPage/selesai";
function MainPage() {
  const [show1, setShow1] = useState(false); //State live record
  const [show2, setShow2] = useState(false); //state Upload File

  const click1 = () => {
    setShow1(!show1);
    console.log(show1);
  };
  const click2 = () => {
    setShow2(!show2);
    console.log(show2);
  };

  return (
    <>
      <div className="md:max-h-screen md:h-screen h-[115vh] w-full md:bg-[#cec9b3] bg-[#cec9b3] md:pb-0 pb-8">
        <HeaderComponent />
        <h1 className=" text-white font-medium text-3xl text-center ">
          Mau record dengan cara apa?
        </h1>
        <Choice onClick2={click2} onClick1={click1} />
        <div className="flex flex-col md:flex-row justify-evenly items-center w-full h-[70%] md:h-[65vh] gap-5 md:gap-0">
          {show1 && <LeftPage />}
          {show2 && <RightPage />}
        </div>
        <div className="w-full p-5">{<Selesai />}</div>
      </div>
    </>
  );
}

export default MainPage;
