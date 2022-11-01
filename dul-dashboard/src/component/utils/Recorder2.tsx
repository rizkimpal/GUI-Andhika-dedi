import React from "react";

import { useReactMediaRecorder } from "react-media-recorder";

const Recoder2 = () => {
  const {status, startRecording, stopRecording, mediaBlobUrl} = useReactMediaRecorder({audio: true})

  return (
    <div className=" w-fit h-fit bg-slate-100 grid mt-3">
      <div className=" ">
        <div className="flex text-2xl">
          {" "}
          Mic Jauh Status
          <p>: {status}</p>
        </div>
        <button
          onClick={startRecording}
          className="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 mx-2 rounded"
        >
          Start Recording
        </button>
        <button
          onClick={stopRecording}
          className="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded"
        >
          Stop Recording
        </button>
        <audio src={mediaBlobUrl} controls className="" />
       </div>
    </div>
  );
};

export default Recoder2;
