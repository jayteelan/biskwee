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
    this.setState({ recipe: recipe, recipeIsLoaded: true });
  };

  /* ---------- MAYBE THIS???? ---------- */
  translateObj = async () => {
    const ingredParsed = [];
    const objs = this.state.recipe.ingredients;
    objs.map(obj => {
      ingredParsed.push(
        `${obj.line.qty}${this.props.all_units[obj.line.unit_id - 1].abbrev} ${
          this.props.all_ingredients[obj.line.ingredient_id - 1].name
        }`
      );
    });

    if (this.state._isMounted === true) {
      this.setState({ parsedIngreds: ingredParsed });
    }
    console.log(this.state.parsedIngreds);
  };

  componentDidMount = async () => {
    this.state._isMounted = true;
    await this.getRecipe(this.props.match);
    this.state.recipeIsLoaded && this.translateObj();
  };

  componentWillUnmount() {
    this.setState({ _isMounted: false });
  }

  render() {
    return (
      <div>
        <h1>RICETTA</h1>;
        <MethodList {...this.props} />
      </div>
    );
  }
}
export default Detail;
