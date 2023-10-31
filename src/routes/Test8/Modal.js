import { cssModal } from "./style";

const Modal = ({ onReset, data }) => {
  return (
    <div className={cssModal}>
      {`Name:${data.get("name") ? data.get("name") : "_____"}`}
      <br />
      {`Age:${data.get("age") ? data.get("age") : "_____"}`}
      <br />
      {`Address:${data.get("address") ? data.get("address") : "_____"}`}
      <br />
      <button onClick={() => onReset()}>Reset</button>
    </div>
  );
};

export default Modal;
