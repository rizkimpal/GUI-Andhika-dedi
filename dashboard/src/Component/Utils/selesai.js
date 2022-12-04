/* eslint-disable no-restricted-globals */
import axios from "axios";

export default function Selesai() {

  const saved = async() => {
    const files = {
      "BG Penulisan": ("BG Penulisan.wav", open("BG Penulisan.wav", "rb")),
    };
    try {
      const response = await axios.get("http://localhost:8000/done", files);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
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
