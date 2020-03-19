import React, { Component } from "react";

class MethodField extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount = e => {
    console.log("METHOD", this.props);
  };

  /* ---------- RENDER ---------- */
  render() {
    return this.props.tempMethods.length === 0 ? (
      <p>waiting for methods...</p>
    ) : (
      this.props.tempMethods.length > 0 &&
        this.props.tempMethods.map((step, i) =>
          step ? (
            <li key={i}>
              <textarea
                id="step"
                cols="75"
                rows="5"
                data-key={i}
                defaultValue={step}
                onChange={e => this.props.handleMethodChange(e)}
              />
              <i
                stepID={step.id}
                stepIndex={i}
                className="material-icons"
                onClick={e => this.props.setMethodDelete(e)}
              >
                close
              </i>
            </li>
          ) : null
        )
    );
  }
}

export default MethodField;
