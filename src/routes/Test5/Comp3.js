import { cssWrapper } from "./style";

import { useState, useContext, createContext} from "react";
import Comp4 from "./Comp4";
import { AppContext } from ".";

export const ModalContext = createContext({
  show: false,
  setShow: (val)=>{}
})
const Comp3 = (/* NO PROPS ALLOWED */) => {
  const [ showModal, setShowModal ] = useState(false);
  const {value} = useContext(AppContext)
  return(
    <ModalContext.Provider value={{show: showModal, setShow: setShowModal}}>
    <>
      <div className={cssWrapper}>{`The Inputted Value is: ${value}`}</div>
      <button onClick={()=>setShowModal(true)} type="button">Show Modal</button>
      {showModal && <Comp4/>}
    </>
    </ModalContext.Provider>
  )
}

export default Comp3;