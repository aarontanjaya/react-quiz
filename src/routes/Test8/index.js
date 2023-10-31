import { useRef, useState } from 'react';
import Modal from './Modal';
import { cssForm } from './style';

const Test8 = () => {
  const formRef = useRef(0)
  const [fields, setFields] = useState(new FormData())
  const [showModal, setShowModal] = useState(false)
  // ONLY ONE HANDLE METHOD ALLOWED
  const handleInput = (e) => {
    //...
    e.preventDefault()
    const formData = new FormData(e.target)
    setFields(formData)
    setShowModal(true)
  };

  const handleReset = ()=>{
    formRef.current.reset()
    setFields(new FormData(formRef.current))
    setShowModal(false)
  }

  return(
    <div>
      <ul>
        <li>User can input the form - only 1 handle method is allowed</li>
        <li>When submit display the modal</li>
        <li>Show the form value inside the modal</li>
        <li>Reset the form and close the modal when user click the reset button</li>
      </ul>
      <form ref={formRef} onxwSubmit={handleInput} className={cssForm}>
        <input name="name" type="text" placeholder="name"/>
        <input name="age" type="text" placeholder="age"/>
        <textarea name="address" type="text" placeholder="address"/>
        <button type="submit">Submit</button>
      </form>
      {/* Only Show the modal when user clicked submit */}
      {showModal && <Modal onReset={handleReset} data={fields}/>}
    </div>
  )
}

export default Test8;