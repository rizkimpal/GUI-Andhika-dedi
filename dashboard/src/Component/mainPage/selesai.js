/* eslint-disable no-restricted-globals */
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { useState } from "react";

export default function Selesai() {

  const [sample,setSample] = useState("")
  let navigate = useNavigate();

  const updateName = (event) => {
    setSample(event.target.value);
  };

  const saved = async () => {
    let body = {
      sample: sample
    }

    try {
      const response = await axios.post("http://localhost:8000/done", body, {
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(body)
      });
      console.log(response);

      const routeChange = () => {
        let path = `/Image`;
        navigate(path);
      };
      routeChange();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="mb-5 text-white bg-gradient-to-r text-2xl font-bold ">
          <label for="sample">Taruh Nama Sample dibawah ini</label>
        </div>
        <div className="my-5 border-black text-black py-2.5">
          <input type="text" id="sample" name="sample" className=" border-black" value={sample} onChange={updateName} />
        </div>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-slate-500 to-slate-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm 
                            px-24 py-2.5 text-center border-2 border-white my-5"
          onClick={saved}
        >
          Selesai
        </button>
      </div>
    </>
  );
}
