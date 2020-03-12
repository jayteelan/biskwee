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
      all_units: this.props.all_units,
      newRecipe: {
        name: "",
        ingredients: [],
        method: []
      }
    };
  }

  componentDidMount() {
    // console.log("edit state", this.state);
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

  editIngred = lines => {
    const {
      qty,
      unit_id,
      ingredient_id
    } = this.props.current_recipe.ingredients;
    return lines.map(li => (
      <div>
        <input id="qty" type="number" value={li.line.qty} />
      </div>
    ));
  };

  makeIngred = (qty, unit_id, ingredient_id) => {
    return (
      <div>
        <label for="qty">amount:</label>
        <input id="qty" type="number" value={qty} />

        <label for="unit">unit</label>
        <select id="unit" className="unit_id">
          {this.props.all_units.length > 1 &&
            console.log("UNITS", this.state.all_units[unit_id - 1])}
          <option selected="selected">
            {this.props.all_units.length > 1 &&
              this.props.all_units[unit_id - 1].name}
          </option>
          {this.props.all_units.length > 1 &&
            this.props.all_units.map(unit => (
              <option value={`${unit.name}`}>{unit.abbrev}</option>
            ))}
        </select>

        <label for="ingredient">ingredient</label>
        <select id="ingredient" className="ingredient_id">
          (!this.props.all_ingredients)?<p>...</p>:
          <option selected="selected">
            {this.props.all_ingredients.length > 1 &&
              this.props.all_ingredients[ingredient_id - 1].name}
          </option>
          {this.props.all_ingredients.length > 1 &&
            this.props.all_ingredients.map(ingred => (
              <option value={`${ingred.name}`}>{ingred.name}</option>
            ))}
        </select>
      </div>
    );
  };

  /*---------- RENDER ---------- */
  render() {
    const { all_ingredients, current_recipe } = this.props;

    if (!this.props.current_recipe) {
      // console.log(this.props);
      return <p>...</p>;
    }
    return (
      <form>
        {this.makeInput("Recipe name", current_recipe.name)}
        {this.editIngred(this.props.current_recipe.ingredients)}
      </form>
    );
  }
}
export default Edit;
