import React, { useState } from "react";
import HeaderComponent from "../Component/header/HeaderComponent";
import LeftPage from "../Component/mainPage/LeftPage"
import RightPage from "../Component/mainPage/RightPage"
import Choice from "../Component/mainPage/Choice";
import Selesai from "../Component/mainPage/selesai";
import MyImage from "../asset/pfft.png"

function ImagePage() {

  const [show1, setShow1] = useState(false); //State live record
  const [show2, setShow2] = useState(false); //state Upload File
  const [selesai, setSelesai] = useState(false);

  const click1 = () => {
    setShow1(!show1);
    setSelesai(!selesai);
  };
  const click2 = () => {
    setShow2(!show2);
    setSelesai(!selesai);
  };


  return (
    <>
      <div className=" md:h-fit h-fit w-fit md:bg-[#cec9b3] bg-[#cec9b3] md:pb-0 pb-8">
        <HeaderComponent />
        <div className="flex justify-center mt-5">
        <img src={MyImage} alt="graph" />
        </div>
        <h1 className=" text-white font-medium text-3xl text-center ">Mau record lagi ngga?</h1>
        <Choice onClick2={click2} onClick1={click1} />
        <div className="flex flex-col md:flex-row justify-evenly items-center w-full h-[70%] md:h-[65vh] gap-5 md:gap-0">
          {show1 && <LeftPage />}
          {show2 && <RightPage />}
        </div>
        <div className="w-full p-5">
          {selesai && <Selesai />}
        </div>
      </div>
    </>
  );
}
export default ImagePage