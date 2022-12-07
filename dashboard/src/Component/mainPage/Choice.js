import React from "react";

const Choice = (props) => {
  return (
    <div className="flex w-full h-[15vh] md:h-[15vh] md:justify-center md:items-center">
      <div className="flex justify-around items-center w-full md:w-[60%] h-full">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-slate-500 to-slate-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm 
                            px-5 py-2.5 text-center mr-2 mb-2 border-2 border-white"
          onClick={props.onClick1}
        >
          Record Langsung
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-slate-500 to-slate-600  hover:bg-gradient-to-bl font-medium rounded-lg text-sm 
                            px-5 py-2.5 text-center mr-2 mb-2 border-2 border-white"
          onClick={props.onClick2}
        >
          Upload File
        </button>
      </div>
    </div>
  );
};

export default Choice;
