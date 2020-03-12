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
      all_ingredients: this.props.all_ingredients,
      newRecipe: {
        name: "",
        ingredients: [],
        method: []
      }
    };
  }

  componentDidMount() {
    // console.log("edit state", this.state);
    // console.log("edit props", this.props);
    this.setState({ _isMounted: true });
  }

  handleChange = e => {
    //set to state
  };

  /* ---------- EDIT EXISTING ATTRIBUTES ---------- */
  makeInput = (key, val) => {
    return !this.props.current_recipe ? (
      <input placeholder={`${key}`} required />
    ) : (
      <input placeholder={`${key}`} defaultValue={val} required />
    );
  };

  editIngred = lines => {
    return lines.map((li, i) => (
      <li key={i}>
        <input id="qty" type="number" defaultValue={li.line.qty} key={i} />

        <select id="unit">
          <option disabled defaultValue={li.line.unit_id}>
            {this.state.all_units[li.line.unit_id - 1].name}
          </option>
          {this.state.all_units.map((unit, i) => (
            <option value={unit.id} key={i}>
              {unit.name}
            </option>
          ))}
        </select>

        <select id="ingredient">
          <option disabled defaultValue={li.line.ingredient_id}>
            {this.state.all_ingredients[li.line.ingredient_id - 1].name}
          </option>
          {this.state.all_ingredients.map((ingred, i) => (
            <option value={ingred.id} key={i}>
              {ingred.name}
            </option>
          ))}
        </select>

        <i class="material-icons">close</i>
      </li>
    ));
  };

  editMethod = steps => {
    return steps.map((step, i) => (
      <li key={i}>
        <textarea id="step" cols="75" rows="5" defaultValue={step.step} />
        <i class="material-icons">close</i>
      </li>
    ));
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
        <ul>
          {this.editIngred(
            this.props.current_recipe.ingredients.length > 1 &&
              this.props.current_recipe.ingredients
          )}
          {this.props.addIngred()}
        </ul>
        <ol>
          {this.editMethod(this.props.current_recipe.method)}
          {this.props.addMethod()}
        </ol>
      </form>
    );
  }
}
export default Edit;
