import { useState } from "react";

function Assignment() {
  let [counter, setCounter] = useState(10);

  let addCounter = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
    console.log("increased value :", counter);
    return;
  };

  let removeCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
    console.log("decreased value : ", counter);
    return;
  };

  return (
    <>
      <h2>Example Counter project with a twist</h2>
      <br />
      <button onClick={addCounter}>add {counter}</button>
      <br />
      <br />
      <button onClick={removeCounter}>remove {counter}</button>
    </>
  );
}

export default Assignment;
