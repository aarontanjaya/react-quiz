import { cssWrapper } from "./style";

import { useState } from "react";
import Comp2 from "./Comp2";
import { CHILD } from ".";

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
  return (
    <div className={cssWrapper}>
      Latest Inputted from{" "}
      <code>{latest === CHILD ? "[Test5/Comp1]*" : "[Test5]"}</code>
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
