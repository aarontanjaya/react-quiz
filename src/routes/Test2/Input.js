const Input = ({value, onChange}) => {
  return <input value={value? value : ""} onChange={(e)=>onChange && onChange(e)} type="text" placeholder="input here" />
}

export default Input;
