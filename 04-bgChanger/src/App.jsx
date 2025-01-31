import "./App.css";
import { useState } from "react";

function App() {
  const [color, setcolor] = useState("olive");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center bg-white shadow-lg px-3 py-2 rounded-2xl">
          <button
            onClick={() => {
              setcolor("red");
            }}
            className="px-4 py-1 rounded-2xl mr-2 text-white"
            style={{ backgroundColor: "red" }}
          >
            RED
          </button>
          <button
            onClick={() => {
              setcolor("green");
            }}
            className="px-4 py-1 rounded-2xl mr-2 text-white"
            style={{ backgroundColor: "green" }}
          >
            GREEN
          </button>
          <button
            onClick={() => {
              setcolor("blue");
            }}
            className="px-4 py-1 rounded-2xl mr-2 text-white"
            style={{ backgroundColor: "blue" }}
          >
            BLUE
          </button>
          <button
            onClick={() => {
              setcolor("yellow");
            }}
            className="px-4 py-1 rounded-2xl mr-2"
            style={{ backgroundColor: "yellow" }}
          >
            YELLOW
          </button>
          <button
            onClick={() => {
              setcolor("olive");
            }}
            className="px-4 py-1 rounded-2xl mr-2 text-white"
            style={{ backgroundColor: "olive" }}
          >
            OLIVE
          </button>
          <button
            onClick={() => {
              setcolor("magenta");
            }}
            className="px-4 py-1 rounded-2xl mr-2 text-white"
            style={{ backgroundColor: "magenta" }}
          >
            MAGENTA
          </button>
          <button
            onClick={() => {
              setcolor("purple");
            }}
            className="px-4 py-1 rounded-2xl mr-2 text-white"
            style={{ backgroundColor: "purple" }}
          >
            PURPLE
          </button>
          <button
            onClick={() => {
              setcolor("teal");
            }}
            className="px-4 py-1 rounded-2xl mr-2 text-white"
            style={{ backgroundColor: "teal" }}
          >
            TEAL
          </button>
          <button
            onClick={() => {
              setcolor("orange");
            }}
            className="px-4 py-1 rounded-2xl text-white"
            style={{ backgroundColor: "orange" }}
          >
            ORANGE
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
