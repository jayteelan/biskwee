import React from "react";

import MethodField from "./MethodField";
import NewMethod from "./NewMethod";

const MethodEditList = props => {
  return (
    <React.Fragment>
      <MethodField {...props} />
      <NewMethod {...props} />
    </React.Fragment>
  );
};

export default MethodEditList;
