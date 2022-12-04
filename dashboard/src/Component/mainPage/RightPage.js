import React from "react";
import Uploadfile from "../Utils/Context2/UploadFIle";
import Uploadfile2 from "../Utils/Context2/UploadFile2";

const RightPage = () => {
  return (
    <>
      <div className="flex w-[90%] md:w-[49%] h-full md:h-[95%] bg-white border-4 border-gray-400 rounded-xl">
        <div className="flex flex-col md:flex-row justify-evenly items-center w-full h-full rounded-xl">
            <Uploadfile />
            <Uploadfile2 />
        </div>
      </div>
    </>
  );
};

export default RightPage;
