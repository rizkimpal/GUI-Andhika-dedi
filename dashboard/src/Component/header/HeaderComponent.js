import React from "react";
import { BsSun } from "react-icons/bs";
const HeaderComponent = () => {
  return (
    <div className=" shadow-md w-full fixed top-0 left-0">
      <div className=" md:flex bg-fuchsia-50 py-4 md:px-10 px-7">
        <div className=" font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800 text-center">
          <span className=" text-3xl text-indigo-600 ">
            <BsSun />
          </span>
          Project Dulloh dan Dedi
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
