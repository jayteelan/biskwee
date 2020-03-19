import React, { Component } from "react";
import { Link } from "react-router-dom";

import IngredList from "./IngredList";
import MethodList from "./MethodList";

const Detail = props => {
  // class Detail extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {};
  //   }

  //   componentDidMount() {
  //     console.log("DETAIL", this.props);
  //   }

  // render() {
  return (
    <div>
      <Link to={`/recipes/${props.match}/edit`}>Edit this recipe</Link>
      <IngredList {...props} />
      <MethodList match={props.match} />
    </div>
  );
  // }
};

export default Detail;
