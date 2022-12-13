/* eslint-disable no-restricted-globals */
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React from 'React'

export default function Selesai() {
  let navigate = useNavigate();

  const saved = async () => {
    try {
      const response = await axios.get("http://localhost:8000/done");
      console.log(response);

      const routeChange = () => {
        let path = `/Image`;
        navigate(path);
      };
      routeChange()
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-slate-500 to-slate-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm 
                            px-24 py-2.5 text-center border-2 border-white"
          onClick={saved}
        >
          Selesai
        </button>
      </div>
    </>
  );
}
