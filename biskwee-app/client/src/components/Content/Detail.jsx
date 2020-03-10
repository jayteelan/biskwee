import React from "react";
import { Component } from "react";
import { getData } from "../../api-helper";

// function Detail() {
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: undefined,
      // ingredient_ids: [],
      ingredients: []
    };
  }

  getRecipe = async id => {
    const recipe = await getData("recipes", id);
    // console.log(recipe);
    this.setState({ recipe: recipe });
    // console.log(this.state);
  };

  getIngredientIds = () => {
    const objects = this.state.recipe.ingredients;
    const id_arr = [];
    objects.map(obj => {
      id_arr.push(obj.line.ingredient_id);
    });
    this.setState({ ingredient_ids: id_arr });
    console.log(this.state);
    // console.log("objects", objects);
  };

  getNames = () => {
    this.state.ingredient_ids.map(id =>
      console.log(this.props.state.ingredients[id - 1].name)
    );
  };

  componentDidMount = async () => {
    await this.getRecipe(this.props.match);
    this.state.recipe && this.getIngredientIds();
    this.state.ingredient_ids && this.getNames();
    console.log("PROPS", this.props);
  };

  render() {
    return <h1>RICETTA</h1>;
  }
}
export default Detail;
