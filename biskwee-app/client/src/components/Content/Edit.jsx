import React, { Component } from "react";

import { getData } from "../../api-helper";
import IngredList from "../Content/Shared/IngredList";
import MethodList from "../Content/Shared/MethodList";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _isMounted: false,
      recipeIsLoaded: false,
      newRecipe: {
        name: "",
        ingredients: [],
        method: []
      }
    };
  }

  componentDidMount() {
    console.log("edit state", this.state);
    console.log("edit props", this.props);
    this.setState({ _isMounted: true });
  }

  makeInput = (key, val) => {
    return !this.props.current_recipe ? (
      <input placeholder={`${key}`} required />
    ) : (
      <input placeholder={`${key}`} value={val} required />
    );
  };

  makeOptions = type => {};

  makeIngred = (qty, unit_id, ingredient_id) => {
    return (
      <span>
        <label for="qty">amount:</label>
        <input id="qty" type="number" value={qty} />

        <label for="unit">unit</label>
        <select id="unit" className="unit_id">
          <option selected="selected">
            {this.props.all_units[unit_id].name}
          </option>
          {/* {this.props.all_units.map(unit => return(
          <option value={`${unit.name}`}>{unit.abbrev}</option>
        ))} */}
        </select>

        <label for="ingredient">unit</label>
        <select id="ingredient" className="ingredient_id">
          <option selected="selected">
            {this.props.all_ingredients[ingredient_id].name}
          </option>

          {/* {this.props.all_ingredients.map(ingred => (
          <option value={`${ingred.name}`}>{ingred.name}</option>
        ))} */}
        </select>
      </span>
    );
  };

  render() {
    if (!this.props.current_recipe) {
      // console.log(this.props);
      return <p>...</p>;
    }
    return (
      <form>
        {this.makeInput("Recipe name", this.props.current_recipe.name)}
        {this.makeIngred(12, 12, 12)}
        <ul>
          <IngredList />
        </ul>
        <MethodList {...this.props} recipe={this.state.recipe} />
      </form>
    );
  }
}
export default Edit;
