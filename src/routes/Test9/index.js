import { useState } from "react";
import Solar from "./Solar";

const Test9 = () => {
  const [num, setNum] = useState(0);
  const handleInput = (e) => {
    setNum(e.target.value);
  };
  return (
    <>
      <ul>
        <li>Make a solar system</li>
        <li>Number of planets must revolves around the sun</li>
        <li>The color of each planet must be unique</li>
        <li>More far the planet = more time it's revolves</li>
      </ul>
      <input
        onChange={handleInput}
        type="text"
        placeholder="number of planet"
      />
      <Solar num={num} />
    </>
  );
};

export default Test9;
