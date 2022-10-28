import React from "react";

import { useReactMediaRecorder } from "react-media-recorder";

const Recoder = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true });

  return (
    <div className=" w-fit h-fit bg-slate-100 flex ">
      <p>{status}</p>
      <button onClick={startRecording} className= "bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded">Start Recording</button>
      <button onClick={stopRecording} className= "bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded">Stop Recording</button>
      <audio src={mediaBlobUrl} controls className="" />
    </div>
  );
};

export default Recoder;
