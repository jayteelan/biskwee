import React, { Component } from "react";

const NameField = props => {
  return (
    <div className="recipe">
      <label htmlFor="recipeName">Recipe Name:</label>
      <input
        placeholder="Recipe name"
        name="recipeName"
        defaultValue={props._isNewRecipe ? undefined : props.name}
        required
        onChange={e => props.onNameChange(e)}
        onBlur={e => (props._isNewRecipe ? props.onNewRecipe(e) : null)}
      />
    </div>
  );
  // }
};

export default NameField;
