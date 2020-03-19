import React, { Component } from "react";

const NameField = props => {
  return (
    <React.Fragment>
      <label for="recipeName">Recipe Name:</label>
      <input
        placeholder="Recipe name"
        name="recipeName"
        defaultValue={props._isNewRecipe ? undefined : props.name}
        required
        onChange={e => props.onNameChange(e)}
      />
    </React.Fragment>
  );
  // }
};

export default NameField;
