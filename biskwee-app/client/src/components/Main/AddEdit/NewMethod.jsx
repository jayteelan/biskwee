import React from "react";

const NewMethod = props => {
  return (
    <li>
      <textarea
        id="step"
        cols="75"
        rows="5"
        placeholder="Add a new step"
        onChange={props.onNewMethodVal}
      />
      <i className="material-icons" onClick={e => props.setMethodNew(e)}>
        add_circle_outline
      </i>
    </li>
  );
};

export default NewMethod;
