import {  createContext, useEffect, useState } from "react";
import { cssWrapper } from "./style";

import Comp1 from "./Comp1";
import Comp3 from "./Comp3";
export const PARENT = 0,
  CHILD = 1,
  MODAL = 2;

export const AppContext = createContext();
const question = (
  <ul>
    <li>
      primarily, user can input the value from <code>#mynumber</code>
    </li>
    <li>
      please add or reduce the value by 1 when user click{" "}
      <code>#numbermin</code> and <code>#numberplus</code> button
    </li>
    <li>
      Show <b>ODD</b> or <b>EVEN</b> in first render section
    </li>
    <li>
      only show <code>#mynumber1</code> input when <code>#overwrite</code>{" "}
      checkbox is checked in <code>Comp1</code>
    </li>
    <li>
      user can input in <code>#mynumber1</code> and render the latest source of
      input in <code>Comp1</code> and it's value in <code>Comp2</code>
    </li>
    <li>
      <code>Comp2</code> will display latest inputted from{" "}
      <code>#mynumber</code> &amp; <code>#mynumber1</code>
    </li>
    <li>
      <code>Comp3</code> will display <code>#mynumber</code>
    </li>
    <li>
      show <code>Comp4</code> modal when user click <b>Show Modal</b> button in{" "}
      <code>Comp3</code>
    </li>
    <li>
      update whole <code>input</code> and value render when user input{" "}
      <code>#mynumber2</code>
    </li>
  </ul>
);

const Test5 = () => {
  const [value, setValue] = useState();
  const [latest, setLatest] = useState(PARENT);
  const handleDecrement = () => {
    setValue(value - 1);
    setLatest(PARENT);
  };
  const handleIncrement = () => {
    setValue(value + 1);
    setLatest(PARENT);
  };
  const handleInputChange = (e) => {
    setValue(e.target.value);
    setLatest(PARENT);
  };

  const handleChildInput = () => {
    setLatest(CHILD);
  };

  const isEven = (num) => {
    return num % 2 === 0;
  };

  const formatOddEven = (num) => {
    if (num == null) {
      return "-";
    }
    return isEven(num) ? "EVEN" : "ODD";
  };

  return (
    <AppContext.Provider
      value={{
        value: value,
        setValue: (val, origin) => {
          setValue(val);
          setLatest(origin);
        },
      }}
    >
      <div>
        {question}
        <button onClick={() => handleDecrement()} id="numbermin" type="button">
          -
        </button>
        <input
          value={value}
          onChange={handleInputChange}
          id="mynumber"
          type="number"
          placeholder="input mynumber"
        />
        <button onClick={() => handleIncrement()} id="numberplus" type="button">
          +
        </button>
        <br />
        <br />
        <div className={cssWrapper}>
          {`The inputted value is [${formatOddEven(value)}]*`}
        </div>
        <Comp1 value={value} latest={latest} onInput={handleChildInput} />
        <Comp3 />
      </div>
    </AppContext.Provider>
  );
};

export default Test5;
