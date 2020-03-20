import React from "react";

const MethodField = props => {
  return props.tempMethods.length === 0 ? (
    <p>waiting for methods...</p>
  ) : (
    props.tempMethods.length > 0 &&
      props.tempMethods.map((step, i) =>
        step ? (
          <li key={i}>
            <textarea
              id="step"
              cols="75"
              rows="5"
              data-key={i}
              defaultValue={step}
              onChange={e => props.handleMethodChange(e)}
            />
            <i
              data-step-index={i}
              className="material-icons"
              onClick={e => props.setMethodDelete(e)}
            >
              close
            </i>
          </li>
        ) : null
      )
  );
};

export default MethodField;
