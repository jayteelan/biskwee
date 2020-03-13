import React, { Component } from "react";
import { updateRecord, deleteRecord } from "../../api-helper";

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

  /* ---------- LIFECYCLE ---------- */
  componentDidMount() {
    this.setState({ _isMounted: true });
    // console.log("HOLD", this.state.newRecipe);
  }

  componentWillUnmount() {
    this.setState({ _isMounted: false });
  }

  /* ---------- EDIT EXISTING ATTRIBUTES ---------- */
  editName = () => {
    // let { name }=
    return (
      <input
        placeholder="Recipe name"
        defaultValue={this.state.newRecipe.name}
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
        <textarea
          id="step"
          cols="75"
          rows="5"
          data-key={i}
          defaultValue={step.step}
          onChange={this.handleMethodChange}
        />
        <i className="material-icons">close</i>
      </li>
    ));
  };

  /* ---------- SET UPDATED RECIPE DETAILS IN STATE ---------- */
  handleNameChange = e => {
    this.state.newRecipe.name = e.target.value;
    // this.setState({ newRecipe: { name: e.target.value } });
    // console.log(this.state.newRecipe.name);
  };

  handleQtyChange = e => {
    const { ingredients } = this.state.newRecipe;
    const index = e.target.getAttribute("data-key");
    ingredients[index].line.qty = parseInt(e.target.value);
    // console.log("qty", ingredients[index].line.qty, e.target.value);
  };

  handleUnitChange = e => {
    const { ingredients } = this.state.newRecipe;
    const recipeUnitListIndex = e.target.getAttribute("data-key");
    const selectedUnitIndex = e.target.selectedIndex - 1;
    ingredients[recipeUnitListIndex].line.unit_id = selectedUnitIndex;
    // console.log("unit", selectedUnitIndex);
  };

  handleIngredChange = e => {
    const { ingredients } = this.state.newRecipe;
    const selectedIngredIndex = e.target.selectedIndex - 1;
    const recipeIngredListIndex = e.target.getAttribute("data-key");
    ingredients[recipeIngredListIndex].line.ingredient_id = selectedIngredIndex;
    // console.log(ingredients[recipeIngredListIndex]);
    // console.log("selectIngredIndex", selectedIngredIndex);
  };

  handleMethodChange = e => {
    const { method } = this.state.newRecipe;
    const stepIndex = e.target.getAttribute("data-key");
    method[stepIndex].step = e.target.value;
    console.log(this.state.newRecipe);
  };

  rehashArr = arr => {
    const string = JSON.stringify(arr);
    return string
      .replace(/\"/g, "")
      .replace(/:/g, "=>")
      .replace(/{/g, "{:")
      .replace(/,/g, ",:")
      .replace(/},:/g, "},")
      .replace(/\[{/, "{")
      .replace(/}]/, "}");
  };
  prepareData = () => {
    const { ingredients, method } = this.state.newRecipe;
    const { line } = ingredients;
    const { step } = method;
    const destrucIngreds = ingredients.map(ingred => ingred.line);
    const destrucMethod = method.map(method => method.step);
    // console.log(this.rehashArr(destrucIngreds));

    this.state.newRecipe.id = parseInt(this.state.newRecipe.id);
    this.state.newRecipe.ingredients = this.rehashArr(destrucIngreds);
    this.state.newRecipe.method = this.rehashArr(destrucMethod);
    console.log(this.state.newRecipe);
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.props.addlMethods.map(step =>
      this.state.newRecipe.method.push({ step: step })
    );
    this.prepareData();
    // console.log(this.props.addlMethods);
    // console.log(this.state.newRecipe);
    // const jsonData = JSON.stringify(this.state.newRecipe);
    const id = this.props.match;
    await updateRecord(id, this.state.newRecipe);
  };

  /*---------- RENDER ---------- */
  render() {
    const { allIngredients, currentRecipe } = this.props;

    if (!this.props.currentRecipe) {
      // console.log(this.props);
      return <p>...</p>;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <button onClick={() => deleteRecord(this.props.match)}>
          DELETE RECIPE
        </button>
        {this.editName()}
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
        <button>Submit</button>
      </form>
    );
  }
}
export default Edit;
