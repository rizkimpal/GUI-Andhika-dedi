import React from "react";
import Record from "../Utils/Context1/Record"
import Record2 from "../Utils/Context1/Record2";

const LeftPage = () => {
  return (
    <>
      <div className="flex w-[90%] md:w-[49%] h-full md:h-[95%] bg-white border-4 border-gray-400 rounded-xl">
        <div className="flex flex-col md:flex-row justify-evenly items-center w-full h-full rounded-xl">
            <Record />
            <Record2 />
        </div>
      </div>
    </>
  );
};

export default LeftPage;
