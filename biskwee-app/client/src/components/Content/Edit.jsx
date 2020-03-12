import React, { Component } from "react";
import update from "immutability-helper";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _isMounted: false,
      recipeIsLoaded: false,
      allUnits: this.props.allUnits,
      allIngredients: this.props.allIngredients,
      newRecipe: {
        id: this.props.match,
        name: this.props.currentRecipe.name,
        ingredients: this.props.currentRecipe.ingredients,
        method: this.props.currentRecipe.method
      }
    };
  }

  componentDidMount() {
    this.setState({ _isMounted: true });
    console.log("HOLD", this.state.newRecipe);
    // this.test();
  }

  componentDidUpdate() {
    // console.log("HOLD", this.state.newRecipe);
    // console.log("UPDATE", this.state);
  }

  handleNameChange = e => {
    this.setState({ newRecipe: { name: e.target.value } });
    console.log(this.state.newRecipe.name);
  };

  handleQtyChange = e => {
    const { ingredients } = this.state.newRecipe;
    const index = e.target.getAttribute("data-key");
    ingredients[index].line.qty = parseInt(e.target.value);
    console.log("qty", ingredients[index].line.qty, e.target.value);
  };

  handleUnitChange = e => {
    const { ingredients } = this.state.newRecipe;
    const recipeUnitListIndex = e.target.getAttribute("data-key");
    const selectedUnitIndex = e.target.selectedIndex - 1;
    ingredients[recipeUnitListIndex].line.unit_id = selectedUnitIndex;
    console.log("unit", selectedUnitIndex);
  };

  handleIngredChange = e => {
    const { ingredients } = this.state.newRecipe;
    const selectedIngredIndex = e.target.selectedIndex - 1;
    const recipeIngredListIndex = e.target.getAttribute("data-key");
    ingredients[recipeIngredListIndex].line.ingredient_id = selectedIngredIndex;
    console.log(ingredients[recipeIngredListIndex]);
    console.log("selectIngredIndex", selectedIngredIndex);
  };

  /* ---------- EDIT EXISTING ATTRIBUTES ---------- */
  editName = val => {
    return (
      <input
        placeholder="Recipe name"
        defaultValue={val}
        required
        onChange={this.handleNameChange}
      />
    );
  };

  editIngred = lines => {
    return lines.map((li, i) => (
      <li key={i}>
        <input
          id="qty"
          type="number"
          defaultValue={li.line.qty}
          data-key={i}
          key={i}
          onChange={this.handleQtyChange}
        />

        <select id="unit" data-key={i} onChange={this.handleUnitChange}>
          <option disabled selected defaultValue={li.line.unit_id}>
            {this.state.allUnits[li.line.unit_id - 1].name}
          </option>
          {this.state.allUnits.map((unit, i) => (
            <option
              value={unit.id}
              data-key={i}
              key={i}
              onChange={this.handleUnitChange}
            >
              {unit.name}
            </option>
          ))}
        </select>

        <select id="ingredient" data-key={i} onChange={this.handleIngredChange}>
          <option disabled selected defaultValue={li.line.ingredient_id}>
            {this.state.allIngredients[li.line.ingredient_id - 1].name}
          </option>
          {this.state.allIngredients.map((ingred, i) => (
            <option value={ingred.id} data-key={i} key={i}>
              {ingred.name}
            </option>
          ))}
        </select>

        <i className="material-icons">close</i>
      </li>
    ));
  };

  editMethod = steps => {
    return steps.map((step, i) => (
      <li key={i}>
        <textarea id="step" cols="75" rows="5" defaultValue={step.step} />
        <i className="material-icons">close</i>
      </li>
    ));
  };

  /*---------- RENDER ---------- */
  render() {
    const { allIngredients, currentRecipe } = this.props;

    if (!this.props.currentRecipe) {
      // console.log(this.props);
      return <p>...</p>;
    }
    return (
      <form>
        {this.editName(currentRecipe.name)}
        <ul>
          {this.editIngred(
            this.props.currentRecipe.ingredients.length > 1 &&
              this.props.currentRecipe.ingredients
          )}
          {this.props.addIngred()}
        </ul>
        <h3>Method</h3>
        <ol>
          {this.editMethod(this.props.currentRecipe.method)}
          {this.props.addMethod()}
        </ol>
      </form>
    );
  }
}
export default Edit;
