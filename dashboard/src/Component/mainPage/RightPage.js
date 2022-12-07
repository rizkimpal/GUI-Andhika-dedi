import React from "react";
import FileDekat from "../Utils/UploadFile/FileDekat";
import FileJauh from "../Utils/UploadFile/FileJauh";

const RightPage = () => {
  return (
    <>
      <div className="flex w-[90%] md:w-[49%] h-full md:h-[95%] bg-white border-4 border-gray-400 rounded-xl">
        <div className="flex flex-col md:flex-row justify-evenly items-center w-full h-full rounded-xl">
            <FileDekat />
            <FileJauh />
        </div>
      </div>
    </>
  );
};

export default RightPage;
