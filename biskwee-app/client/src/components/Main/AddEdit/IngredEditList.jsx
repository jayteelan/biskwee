import React, { Component } from "react";
import { getAllIngredLines } from "../../../api-helper";

import IngredField from "./IngredField";
import NewIngred from "./NewIngred";

const IngredEditList = props => {
  // class IngredEditList extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {};
  //   }
  // componentDidMount() {
  //   console.log("IngrList", this.props);
  // }

  // render() {
  return (
    <React.Fragment>
      <IngredField {...props} />
      {/* <NewIngred /> */}
    </React.Fragment>
  );
};
// }

export default IngredEditList;
