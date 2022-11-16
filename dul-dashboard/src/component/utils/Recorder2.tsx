/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import axios from "axios";
import { useReactMediaRecorder } from "react-media-recorder";
import FormData from "form-data";

const Recoder2 = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
  useReactMediaRecorder({ audio: true });

  const handleSave = async (file: string | undefined) => {
    const audioBlob = await fetch(file!).then((r) => r.blob());
    const audioFile = new File([audioBlob], "voice2.wav", { type: "audio/wav" });
    const formData = new FormData(); // preparing to send to the server

    formData.append("file", audioFile); // preparing to send to the server
    axios
      .post("http://localhost:8000/upload", formData, {
        headers: formData.getHeaders
          ? formData.getHeaders()
          : { "Content-Type": "multipart/form-data" },
      })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

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
        <button
          onClick={() => {
            const buffer = mediaBlobUrl;
            handleSave(buffer);
          }}
          className="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded"
        >
          Upload
        </button>
        <audio src={mediaBlobUrl} controls className="" />
      </div>
    </div>
  );
};

export default Recoder2;