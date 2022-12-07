import React from "react";
import { BsSun } from "react-icons/bs";
const HeaderComponent = () => {
  return (
    <div className="flex justify-center items-center w-full h-16 shadow-md top-0 left-0 bg-indigo-400">
          <span className="text-indigo-600">
            <BsSun />
          </span>
         <p className="font-semibold text-2xl text-white"> Project Dulloh dan Dedi </p>
    </div>
  );
};

export default HeaderComponent;
