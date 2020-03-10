import React, { Component } from "react";

class IngredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // recipe: undefined,
      // // ingredient_ids: [],
      // ingredients: []
    };
  }
  getOneLine = i => {
    const { qty, recipeIngreds, recipeUnits } = this.props.state;
    console.log(qty);
    console.log(`${qty[i]} ${recipeUnits[i]} ${recipeIngreds[i]}`);
  };

  getAll = () => {
    this.props.state.map(i => this.getOneLine(i));
  };

  // componentDidMount() {
  //   setTimeout(() => this.getOneLine(2), 4000);
  // }
  render() {
    return (
      <ul>
        <h3>LIST</h3>
        {/* {this.props.state.map()} */}
      </ul>
    );
  }
}

export default IngredList;
