import { useState } from "react";
import Input from "./Input";
import Label from "./Label";

const Test2 = () => {
  const [value, setValue] = useState("")
  const onClear = ()=>{
    setValue("")
  }

  const onInputChange = (e)=>{
    setValue(e.target.value)
  }

  return(
    <div>
      <ul>
        <li>Render user input value inside the label below</li>
        <li>show "close button" only when hovered, and clear the input value when clicked.</li>
      </ul>
      <p>
        <Label input={value} onClear={onClear}/>
      </p>
      <Input value={value} onChange={onInputChange}/>
    </div>
  )
}

export default Test2;