import React from 'react';
import Option from './Option';
const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>RemoveAll</button>
      {props.options.length === 0 && <p>Please Add an option</p>}
      {
        props.options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleindivdelete={props.handleindivdelete}
          />
        ))
      }
    </div>
  )
}

export default Options