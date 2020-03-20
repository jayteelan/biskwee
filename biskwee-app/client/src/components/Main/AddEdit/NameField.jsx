import React, { Component } from "react";

const NameField = props => {
  return (
    <React.Fragment>
      <label htmlFor="recipeName">Recipe Name:</label>
      <input
        placeholder="Recipe name"
        name="recipeName"
        defaultValue={props._isNewRecipe ? undefined : props.name}
        required
        onChange={e => props.onNameChange(e)}
        onBlur={e => (props._isNewRecipe ? props.onNewRecipe(e) : null)}
      />
    </React.Fragment>
  );
  // }
};

export default NameField;
