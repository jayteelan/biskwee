import React, { Component } from "react";

class NameField extends Component {
  constructor(props) {
    super(props);

    this.state = { newName: "" };
  }
  componentDidMount() {
    console.log("NAME", this.props);
  }
  //   editName = () => {
  //   // let { name }=
  //   return (
  //     <input
  //       placeholder="Recipe name"
  //       defaultValue={!this.props.name?"":this.props.name}
  //       required
  //       onChange={this.handleNameChange}
  //     />
  //   );
  // 	};

  handleNameChange = e => {
    this.setState({ newName: e.target.value });
    console.log("newName", this.state.newName);
  };

  render() {
    return (
      <React.Fragment>
        <label for="recipeName">Recipe Name:</label>
        <input
          placeholder="Recipe name"
          name="recipeName"
          defaultValue={this.props._isNewRecipe ? undefined : this.props.name}
          required
          onChange={this.handleNameChange}
        />
      </React.Fragment>
    );
  }
}

export default NameField;
