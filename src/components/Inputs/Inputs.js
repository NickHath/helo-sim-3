import React from 'react';
import './Inputs.css';

const Inputs = (props) => {
  let options = props.options.map((opt, i) => {
    return (<option key={i} value={opt}> {opt} </option>)
  })

  return (
    <div className='field'>
      <p>{props.field}</p>
      <select>
        <option disabled selected value> -- Select -- </option>
        { options }
      </select>
    </div>
  )
}

export default Inputs;