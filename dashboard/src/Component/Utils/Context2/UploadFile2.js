import React, { useState, useEffect } from "react";
import axios from "axios";
import FormData from "form-data";

var a;
const Uploadfile2 = () => {
  const [buttonName, setButtonName] = useState("Play");
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    if (a) {
      a.pause();
      a = null;
      setButtonName("Play");
    }
    if (audio) {
      a = new Audio(audio);
      a.onended = () => {
        setButtonName("Play");
      };
    }
  }, [audio]);

  const handleClick = () => {
    if (buttonName === "Play") {
      a.play();
      setButtonName("Pause");
    } else {
      a.pause();
      setButtonName("Play");
    }
  };

  const addFile = (e) => {
    if (e.target.files[0]) {
      setAudio(URL.createObjectURL(e.target.files[0]));
    }
  };
  const handleSave = async () => {
    const audioBlob = await fetch(this.state.sample.url).then((r) => r.blob());
    const audioFile = new File([audioBlob], "voice.wav", { type: "audio/wav" });
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
    <>
      <div className="flex justify-center items-center bg-slate-600 md:w-[48%] md:h-[95%] w-[95%] h-[48%] rounded-md">
        <div className="w-[90%] h-full md:h-[85%]">
          <div className="flex flex-col justify-evenly w-full h-full">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-slate-500 to-slate-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm 
                               py-2.5 text-center mr-28 mb-2 border-2 border-white"
              onClick={handleClick}
            >
              Upload file
            </button>
            <input
              type="file"
              className="text-white bg-gradient-to-r from-slate-500 to-slate-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm 
                               py-2.5 text-center mr-2 mb-2 border-2 border-white"
              onChange={addFile}
            />
            <audio
              className="text-white bg-gradient-to-r from-slate-500 to-slate-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm 
                               py-2.5 text-center mr-2 mb-2 border-2 border-white"
              src={audio}
              controls
            />
            <button
              type="button"
              className="text-white bg-gradient-to-r from-slate-500 to-slate-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm 
                              py-2.5 text-center mr-28 mb-2 border-2 border-white"
              onClick={() => {
                handleSave();
              }}
            >
              Send ke backend
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Uploadfile2;
