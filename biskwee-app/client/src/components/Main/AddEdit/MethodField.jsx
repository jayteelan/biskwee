import React, { Component } from "react";

class MethodField extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount = e => {
    console.log("METHOD", this.props);
  };

  render() {
    return this.props.tempMethods.length === 0 ? (
      <p>waiting for methods...</p>
    ) : (
      this.props.tempMethods.length > 0 &&
        this.props.tempMethods.map((step, i) => (
          <li key={i}>
            <textarea
              id="step"
              cols="75"
              rows="5"
              data-key={i}
              defaultValue={step.step}
              onChange={e => this.props.handleMethodChange(e)}
            />
            <i className="material-icons">close</i>
          </li>
        ))
    );
  }
}

export default MethodField;
