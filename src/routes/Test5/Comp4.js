import { useContext } from "react";
import { ModalContext } from "./Comp3";
import { cssWrapper, cssModalRight } from "./style";
import { AppContext, MODAL } from ".";

const Comp4 = (/* NO PROPS ALLOWED */) => {
  const { setShow } = useContext(ModalContext);
  const { setValue } = useContext(AppContext);
  return (
    <>
      <div className={cssWrapper}>
        <div className={cssModalRight}>
          Input Modal
          <button onClick={() => setShow(false)} type="button">
            ⊗
          </button>
        </div>
        <input
          id="mynumber2"
          type="number"
          placeholder="input mynumber2"
          onChange={(e) => setValue && setValue(e.target.value, MODAL)}
        ></input>
      </div>
    </>
  );
};

export default Comp4;
