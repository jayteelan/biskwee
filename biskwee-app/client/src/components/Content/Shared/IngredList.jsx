import React, { Component } from "react";

class IngredList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  mapIngredLI = () => {
    if (!this.props.parsedIngreds) {
      return <p>loading ingredients...</p>;
    }
    return this.props.parsedIngreds.map((ingred, index) => (
      <li key={index}>{ingred}</li>
    ));
  };

  render() {
    return <ul>{this.mapIngredLI()}</ul>;
  }
}

export default IngredList;
