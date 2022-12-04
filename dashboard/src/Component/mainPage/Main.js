/* eslint-disable no-restricted-globals */
import React from "react";
import Uploadfile from "../Utils/UploadFile";
import axios from "axios";
const MainMenu = () => {
  async function saved() {
    const files = {'BG Penulisan':("BG Penulisan.wav", open("BG Penulisan.wav",'rb'))}
    try {
      const response = await axios.get("http://localhost:8000/done" ,files);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <div className="flex flex-col w-screen h-screen bg-slate-600 justify-center items-center gap-5">
        <div className=" w-3/4 h-32 bg-slate-100 rounded-md mt-10">
          <div className="text-center text-black text-3xl">
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
          </div>
          <div className="grid text-xs mt-10">
            <Uploadfile />
          </div>
        </div>
        <div className="grid justify-items-center items-center">
          <button
            className="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded"
            onClick={() => {
              saved();
            }}
          >
            Selesai!
          </button>
        </div>
      </div>
    </>
  );
};

export default MainMenu;
