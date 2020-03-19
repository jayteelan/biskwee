import React, { Component } from "react";
import { getAllIngredLines } from "../../../api-helper";

import IngredField from "./IngredField";
import NewIngred from "./NewIngred";

const IngredEditList = props => {
  return (
    <React.Fragment>
      <IngredField {...props} />
      <NewIngred {...props} />
    </React.Fragment>
  );
};
// }

export default IngredEditList;
