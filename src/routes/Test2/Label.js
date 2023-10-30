import { css } from 'react-emotion';

const cssLabel = css({
  display: 'inline-block',
  margin: '4px 0px',
  padding: '2px 8px',
  backgroundColor: '#e0e0e0',
  borderRadius: 8,
  button: {
    backgroundColor: 'transparent',
    color: 'red',
    marginLeft: 4,
    fontSize: 22,
    padding: 0,
    border: 'none',
    outline: 'none',
  }
})

const Label = ({input, onClear}) => {
  return (
    <span className={cssLabel}>
      {input}
      <button onClick={()=>onClear && onClear()} type="button">⊗</button>
    </span>
  )
}

export default Label;
