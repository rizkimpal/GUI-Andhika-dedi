import React from "react";
import Recoder from "../utils/Recoder";

const MainMenu = () => {
  // const [recordFile, setRecordFile] = useState();
  // const [uploadFile, setUploadFile] = useState();

  // async function RecordFile() {
  //   try {
  //   } catch(error) {
      
  //   }
  // }
  // async function UploadFile() {}

  return (
    <div className="grid bg-violet-50 w-screen">
      <div className="grid justify-items-center">
        <div className="grid w-3/4 box-border rounded-md h-24 text-center p-4 my-5 text-black text-3xl items-center">
          Mau pilih rekaman dengan cara apa?
        </div>
      </div>
      <div className=" grid grid-cols-2 justify-items-center text-2xl">
        <button className="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded">
          Record langsung
        </button>
        <button className="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded">
          Upload file
        </button>
        <Recoder />
      </div>
    </div>
  );
};

export default MainMenu;
