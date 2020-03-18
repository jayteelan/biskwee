import React, { Component } from "react";

class MethodField extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  // editMethod = steps => {
  //   return steps.map((step, i) => (
  //     <li key={i}>
  //       <textarea
  //         id="step"
  //         cols="75"
  //         rows="5"
  //         data-key={i}
  //         defaultValue={step.step}
  //         onChange={this.handleMethodChange}
  //       />
  //       <i className="material-icons">close</i>
  //     </li>
  //   ));
  // };

  render() {
    return <h1>method map</h1>;
  }
}

export default MethodField;
