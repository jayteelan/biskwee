import React, { Component } from "react";

const NameField = props => {
  // class NameField extends Component {
  //   constructor(props) {
  //     super(props);

  // this.state = { newName: "" };
  // }
  // componentDidMount() {
  //   console.log("NAME", this.props);
  // }

  // handleNameChange = e => {
  //   // this.setState({ newName: e.target.value });
  //   this.props.onNameChange(e.target.value);
  //   this.props.tempName = this.props.newName;
  //   console.log("newName", this.props.newName);
  // };

  // render() {
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
