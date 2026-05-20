import { useEffect, useState } from "react";
import Timer from "./Timer";

export default function Parent() {
  let [showTimer, setShowTimer] = useState(false);
  useEffect(() => {
    console.log("Use Effect Executed");
  }, [showTimer]);
  function manageView() {
    setShowTimer(!showTimer);
  }

  return (
    <div>
      <h1>React Life Cycle Demo</h1>
      <button onClick={manageView}>Show Timer</button>
      {showTimer ? <Timer /> : null}
    </div>
  );
}
