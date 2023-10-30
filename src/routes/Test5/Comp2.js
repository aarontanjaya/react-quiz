import { PARENT } from ".";
import { cssWrapper } from "./style";

const Comp2 = ({ parentValue, localValue, display, latest }) => {
  const latestValue = latest === PARENT ? parentValue : localValue;
  return (
    <>
      <div className={cssWrapper}>{`Latest inputted value is: ${
        display ? latestValue : parentValue
      }`}</div>
    </>
  );
};

export default Comp2;
