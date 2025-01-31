import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  // let counter = 15;

  let addCounter = () => {
    counter += 1;
    setCounter(counter);
    console.log("clicked :", counter);
  };

  let removeCounter = () => {
    console.log("clicked :", counter);
    counter -= 1;
    setCounter(counter);
  };

  return (
    <>
      <h2>Counter project to understand importance of Hooks</h2>
      <button onClick={addCounter}>add {counter} </button>
      <br />
      <br />
      <button onClick={removeCounter}>remove {counter} </button>
    </>
  );
}

export default App;
