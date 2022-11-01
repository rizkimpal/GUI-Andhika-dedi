import React from "react";
import Recoder from "../utils/Recoder";
import Recoder2 from "../utils/Recorder2";
import UploadFile from "../utils/UploadFile";

const MainMenu = () => {
  return (
    <div className="grid bg-violet-50 w-screen">
      <div className="grid justify-items-center">
        <div className="grid w-3/4 box-border rounded-md h-24 text-center p-4 my-5 text-black text-3xl items-center">
          Mau pilih rekaman dengan cara apa?
        </div>
      </div>
      <div className=" grid grid-cols-2 justify-items-center mb-5">
        <button className="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded text-2xl">
          Record langsung
        </button>
        <button className="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded text-2xl">
          Upload file
        </button>
        <div className="grid text-xs mt-10">
          <Recoder />
          <Recoder2 />
        </div>
        <div className="grid text-xs mt-10">
          <UploadFile />
        </div>
      </div>
      <div className="grid justify-items-center items-center">
        <button className="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded">
          Selesai!
        </button>
      </div>
    </div>
  );
};

export default MainMenu;
