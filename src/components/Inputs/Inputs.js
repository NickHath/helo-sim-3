import React from 'react';

const Inputs = (props) => {
  let options = props.options.map((opt, i) => {
    return (<option key={i} value={opt}> {opt} </option>)
  })

  return (
    <div className='input_field'>
      <p>{props.field}</p>
      <select>
        <option disabled selected value> -- Select -- </option>
        { options }
      </select>
    </div>
  )


}

export default Inputs;