import { cssWrapper } from "./style";

import { useEffect, useState } from "react";
import Comp2 from "./Comp2";
import { CHILD, MODAL, PARENT } from ".";

const Comp1 = ({ value, latest, onInput }) => {
  const [checked, setChecked] = useState(false);
  const [inputNumber, setInputNumber] = useState(0);
  const handleInputChange = (e) => {
    setInputNumber(e.target.value);
    onInput();
  };

  const toggleCheck = () => {
    setChecked(!checked);
  };

  const getLatestOrigin = (origin) => {
    switch (origin) {
      case PARENT:
        return "[Test5]";
      case CHILD:
        return "[Test5/Comp1]*"
      case MODAL:
        return "MODAL"
      default:
        return ""
    }
  };

  useEffect(()=>{
    if(latest === MODAL){
      setInputNumber(value)
    }
  },[value, latest])

  return (
    <div className={cssWrapper}>
      Latest Inputted from{" "}
      <code>{getLatestOrigin(latest)}</code>
      <br />
      <br />
      <label htmlFor="overwrite">
        Local overwrite:{" "}
        <input
          id="overwrite"
          type="checkbox"
          onChange={toggleCheck}
          value={checked}
        />
        {/* only show when overwrite is checked */}
        <input
          value={inputNumber}
          id="mynumber1"
          onChange={handleInputChange}
          type="number"
          placeholder="input mynumber1"
        />
      </label>
      <Comp2
        parentValue={value}
        localValue={inputNumber}
        latest={latest}
        display={checked}
      />
    </div>
  );
};

export default Comp1;
