import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import New from "./New";
import "./App.css";

function App() {
  let array = {
    username: "Thor",
    age: 1500,
  };

  return (
    <>
      <h1 className="bg-green-900  p-4  rounded-xl ">Tailwind & Props</h1>
      <New username="Thor Odinson" btnText="Click me" />
    </>
  );
}

export default App;
