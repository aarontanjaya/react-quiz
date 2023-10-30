import { useState } from "react";

const Test1 = () => {
  const [value, setValue] = useState("")
  const formatInput = (input) =>(input ? input:"__________")

  return(
    <div>
      <ul>
        <li>Please render the inputted value</li>
      </ul>
      <p>
        <b>User Input: </b> <p>{formatInput(value)}</p>
      </p>
      <input onChange={(e)=>setValue(e.target.value)} type="text" placeholder="input here"/>
    </div>
  )
}

export default Test1;