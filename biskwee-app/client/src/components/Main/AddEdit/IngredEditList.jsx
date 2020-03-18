import React, { Component } from "react";
import { getAllIngredLines } from "../../../api-helper";

import IngredField from "./IngredField";
import NewIngred from "./NewIngred";

class IngredEditList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  // componentDidMount() {
  //   console.log("IngrList", this.props);
  // }

  render() {
    return (
      <React.Fragment>
        <IngredField {...this.props} />
        {/* <NewIngred /> */}
      </React.Fragment>
    );
  }
}

export default IngredEditList;
