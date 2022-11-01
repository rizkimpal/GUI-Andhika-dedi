/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useState } from "react";

import { useReactMediaRecorder } from "react-media-recorder";

const Recoder = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true });
  const [ audio, setAudio ] = useState<any | null>(null);

const Uploadfile = () => {
  let file = mediaBlobUrl
  axios.post('http://localhost:8000/upload', {
    file,
  } ).then(function (res) {
    console.log(res)
  }).catch(function(e) {
    console.error(e)
  })
  setAudio(mediaBlobUrl)
  
}

  return (
    <div className=" w-fit h-fit bg-slate-100 grid mt-3">
      <div className=" ">
        <div className="flex text-2xl">
          {" "}
          Mic dekat Status
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
        <button
          onClick={Uploadfile}
          className="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded"
        >
          Upload
        </button>
        <audio src={mediaBlobUrl} controls className="" />
      </div>
    </div>
  );
};

export default Recoder;
