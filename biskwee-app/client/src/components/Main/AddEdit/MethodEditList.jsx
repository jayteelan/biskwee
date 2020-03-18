import React, { Component } from "react";

import MethodField from "./MethodField";
import NewMethod from "./NewMethod";

const MethodEditList = props => {
  return (
    <React.Fragment>
      <MethodField {...props} />
      <NewMethod />
    </React.Fragment>
  );
};

export default MethodEditList;
