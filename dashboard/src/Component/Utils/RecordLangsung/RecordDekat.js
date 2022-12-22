import React, { Component } from "react";
import AudioReactRecorder, { RecordState } from "audio-react-recorder";
import axios from "axios";
import FormData from "form-data";

export default class RecordDekat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recordState: null,
      sample: null,
      status: "",
    };
  }

  start = () => {
    this.setState({
      recordState: RecordState.START,
    });
  };

  stop = () => {
    this.setState({
      recordState: RecordState.STOP,
    });
  };
  Record = async () => {
    const delay = ms => new Promise(
      resolve => setTimeout(resolve, ms)
    )
    this.setState({
      recordState: RecordState.START,
    })
    await delay(16000);

    this.setState({
      recordState: RecordState.STOP,
    })
  }

  //audioData contains blob and blobUrl
  onStop = (audioData) => {
    this.setState({
      sample: audioData,
    });
    console.log("audioData", audioData);
  };
  handleSave = async () => {
    const audioBlob = await fetch(this.state.sample.url).then((r) => r.blob());
    const audioFile = new File([audioBlob], "voiceDekat.wav", {
      type: "audio/wav",
    });
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

  render() {
    const { recordState } = this.state;
    return (
      <>
        <div className="flex justify-center items-center bg-slate-200 md:w-[48%] md:h-[95%] w-[95%] h-[48%] rounded-md">
          <div className="w-[90%] h-full md:h-[85%]">
            <div className="flex flex-col justify-evenly gap-2 w-full h-full">
              <div className="flex justify-evenly items-center h-[20%]">
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-slate-500 to-slate-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm 
                              px-5 py-2.5 text-center border-2 border-white"
                  onClick={this.Record}
                >
                  Start
                </button>
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-slate-500 to-slate-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm 
                              px-5 py-2.5 text-center border-2 border-white"
                  onClick={this.stop}
                >
                  Stop
                </button>
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-slate-500 to-slate-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm 
                              px-5 py-2.5 text-center border-2 border-white"
                  onClick={this.handleSave}
                >
                  Upload
                </button>
              </div>
              <div className="flex justify-center items-center w-full h-[20%]">
                <p className="flex justify center "></p>
                <audio
                  id="audio"
                  src={this.state.sample ? this.state.sample.url : null}
                  controls
                  className=""
                />
              </div>
              <div className="flex justify-center items-center w-full h-[20%]">
                <AudioReactRecorder
                  state={recordState}
                  onStop={this.onStop}
                  canvasWidth="300"
                  canvasHeight="150"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
