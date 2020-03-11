import React, { Component } from "react";

class MethodList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  mapMethodLI = () => {
    if (!this.props.recipe) {
      return <p>loading method...</p>;
    }
    if (this.props.recipe.method) {
      return this.props.recipe.method.map((step, index) => (
        <li key={index}>
          <p>{step.step}</p>
        </li>
      ));
    }
  };

  render() {
    return (
      <div>
        <h1>Method</h1>
        <ol>{this.mapMethodLI()}</ol>
      </div>
    );
  }
}

export default MethodList;
