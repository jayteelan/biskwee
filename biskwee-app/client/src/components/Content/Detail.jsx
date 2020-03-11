import React, { Component } from "react";

import { getData } from "../../api-helper";
import IngredList from "../Content/Shared/IngredList";
import MethodList from "../Content/Shared/MethodList";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _isMounted: false,
      recipeIsLoaded: false
    };
  }

  /* ---------- RETRIEVE TARGET RECIPE ---------- */
  getRecipe = async id => {
    const recipe = await getData("recipes", id);
    this.setState(
      {
        recipe: recipe,
        ingredArr: recipe.ingredients,
        recipeIsLoaded: true
      },
      () => {
        this.parseIngreds();
      }
    );
  };

  /* ---------- PARSE INGREDIENT JSON TO HUMAN-READABLE INGREDIENT LIST ---------- */
  parseIngreds() {
    const { all_units, all_ingredients } = this.props;
    const ingredParsed = this.state.ingredArr.map(obj => {
      return `${obj.line.qty}${all_units[obj.line.unit_id - 1].abbrev} ${
        all_ingredients[obj.line.ingredient_id - 1].name
      }`;
    });
    this.setState({ parsedIngreds: ingredParsed }, () => {
      // console.log("parsed!", this.state.parsedIngreds);
    });
  }

  componentDidMount = () => {
    // setTimeout(async () => await this.getRecipe(this.props.match), 1000);
    if (!this.state.recipeIsLoaded) {
      console.log("loading");
      this.getRecipe(this.props.match);
    }
    this.setState({ _isMounted: true });
  };

  componentWillUnmount() {
    this.setState({ _isMounted: false });
  }

  render() {
    return (
      <div>
        <h1>Recipe</h1>
        <IngredList
          id={this.props.match}
          parsedIngreds={this.state.parsedIngreds}
        />
        <MethodList {...this.props} />
      </div>
    );
  }
}
export default Detail;
