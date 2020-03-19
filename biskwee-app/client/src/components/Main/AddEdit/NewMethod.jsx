import React from "react";

const NewMethod = props => {
  return (
    <li>
      <textarea
        id="step"
        cols="75"
        rows="5"
        placeholder="Add a new step"
        // onChange={props.handleNewMethod}
      />
      <i
        className="material-icons"
        // onClick={props.handleMethodSubmit}
      >
        add_circle_outline
      </i>
    </li>
  );
};

export default NewMethod;
