import React, { Component } from "react";
import AudioReactRecorder, { RecordState } from "audio-react-recorder";
import axios from 'axios'
import FormData from 'form-data'

export default class Recorder2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recordState: null,
      sample: null,
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

  //audioData contains blob and blobUrl
  onStop = (audioData) => {
    this.setState({
        sample: audioData
      })
    console.log("audioData", audioData);
  };
  handleSave = async () => {
    const audioBlob = await fetch(this.state.sample.url).then((r) => r.blob());
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
  }

  render() {
    const { recordState } = this.state;

    return (
      <div>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.handleSave}> Upload </button>
        <AudioReactRecorder state={recordState} onStop={this.onStop} />
        <audio id ='audio' src={this.state.sample ? this.state.sample.url : null} controls className="" />
      </div>
    );
  }
}
