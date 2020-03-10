import React from "react";
import { Component } from "react";
import { getData } from "../../api-helper";

// function Detail() {
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {}
    };
  }

  getRecipe = async id => {
    const recipe = await getData("recipes", id);
    // console.log(recipe);
    this.setState({ recipe: recipe });
    console.log(this.state);
  };

  parseIngredients = async => {
    const objects = this.state.recipe.ingredients;
    objects.map(obj => console.log(obj));
    //regex :->"" =>->":"
    //JSON.parse(regex'd obj)
    //ingredient = getData("ingredients", obj.ingredient_id)
    //return ingredient.name
    // console.log("ingredients", objects);
  };

  componentDidMount = async () => {
    await this.getRecipe(this.props.match);
    await this.parseIngredients();
  };

  render() {
    return <h1>RICETTA</h1>;
  }
}
export default Detail;
