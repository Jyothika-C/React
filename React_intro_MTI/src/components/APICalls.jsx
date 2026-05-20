import { useState, useEffect } from "react";

export default function ApiCalls() {
  let [fact, setFact] = useState("");
  useEffect(() => {
    getFact();
  }, []);
  async function getFact() {
    const URL = "https://catfact.ninja/fact";
    let data = await fetch(URL);
    let result = await data.json();
    setFact(result.fact);
  }
  return (
    <div>
      <h3>Fact : {fact} </h3>
      <button onClick={getFact}>Get Fact </button>
    </div>
  );
}
