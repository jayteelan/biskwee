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
    console.log("edit state", this.state);
    console.log("edit props", this.props);
    this.setState({ _isMounted: true });
  }

  handleChange = e => {
    //set to state
  };

  makeInput = (key, val) => {
    return !this.props.current_recipe ? (
      <input placeholder={`${key}`} required />
    ) : (
      <input placeholder={`${key}`} defaultValue={val} required />
    );
  };

  editIngred = lines => {
    return lines.map((li, i) => (
      <div>
        <input id="qty" type="number" defaultValue={li.line.qty} key={i} />

        <select id="unit">
          <option defaultValue={li.line.unit_id}>
            {this.state.all_units[li.line.unit_id - 1].name}
          </option>
          {this.state.all_units.map((unit, i) => (
            <option value={unit.id} key={i}>
              {unit.name}
            </option>
          ))}
        </select>

        <select id="ingredient">
          <option defaultValue={li.line.ingredient_id}>
            {this.state.all_ingredients[li.line.ingredient_id - 1].name}
          </option>
          {this.state.all_ingredients.map((ingred, i) => (
            <option value={ingred.id} key={i}>
              {ingred.name}
            </option>
          ))}
        </select>

        {/* plus/minus */}
      </div>
    ));
  };

  editMethod = steps => {
    return steps.map((step, i) => (
      <li>
        <textarea id="step" cols="75" rows="5">
          {step.step}
        </textarea>
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
        {this.editIngred(
          this.props.current_recipe.ingredients.length > 1 &&
            this.props.current_recipe.ingredients
        )}
        <ol>{this.editMethod(this.props.current_recipe.method)}</ol>
      </form>
    );
  }
}
export default Edit;
