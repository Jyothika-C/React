import { useEffect, useState } from "react";

export default function UseEffectExample() {
  let [valueX, setValueX] = useState(0);
  let [valueY, setValueY] = useState(0);

  function changeX() {
    setValueX((valueX) => valueX + 1);
  }
  function changeY() {
    setValueY((valueY) => valueY + 1);
  }

  useEffect(() => {
    console.log("use Effect Executed");
  }, []);

  return (
    <>
      <div>
        <h1>Value X = {valueX}</h1>
        <button onClick={changeX}>Increase X</button>
      </div>

      <div>
        <h1>Value Y = {valueY}</h1>
        <button onClick={changeY}>Increase Y</button>
      </div>
    </>
  );
}
