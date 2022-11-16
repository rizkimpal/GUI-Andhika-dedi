import React, { useState, useEffect } from "react";
  
  var a: any;
  const Uploadfile = () => {
    const [buttonName, setButtonName] = useState("Play");
  
    const [audio, setAudio] = useState<any | null>(null);
  
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
    };
  }
  
    const addFile = (e: any) => {
      if (e.target.files[0]) {
        setAudio(URL.createObjectURL(e.target.files[0]));
      }
    };
    return (
      <div>
        <button onClick={handleClick} className="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 mx-2 rounded">{buttonName}</button>
        <div className="mt-5">
        <input type="file" onChange={addFile} className="" />
        <audio src={audio} controls className="" />
        </div>
      </div>
    );
  };
  export default Uploadfile;