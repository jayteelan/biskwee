import React, { Component } from "react";
import { getAllIngredLines, deleteIngredLine } from "../../../api-helper";

class IngredField extends Component {
  constructor(props) {
    super(props);

    this.state = { ingredLines: [] };
  }

  /* ---------- LIFECYCLE ---------- */
  componentDidMount = async () => {
    const ingredLines = await getAllIngredLines(this.props.match);
    this.setState({ ingredLines: ingredLines });
    // console.log("INGREDLIST", this.state);
    // console.log("INGRProps", this.props);
  };

  componentWillUnmount = () => {
    this.setState({ ingredLines: [] });
  };

  /* ---------- HANDLE VALUE CHANGES ---------- */
  handleQtyChange = e => {
    const { ingredLines } = this.state;
    const index = e.target.getAttribute("data-key");
    ingredLines[index].qty = parseInt(e.target.value);
    console.log("qty", ingredLines[index].qty);
  };

  handleUnitChange = e => {
    const { ingredLines } = this.state;
    const recipeUnitListIndex = e.target.getAttribute("data-key");
    const selectedUnitIndex = e.target.selectedIndex - 1;
    ingredLines[recipeUnitListIndex].unit_id = selectedUnitIndex;
    console.log("unit", selectedUnitIndex);
  };

  handleIngredChange = e => {
    const { ingredLines } = this.state;
    const selectedIngredIndex = e.target.selectedIndex - 1;
    const recipeIngredListIndex = e.target.getAttribute("data-key");
    ingredLines[recipeIngredListIndex].ingredient_id = selectedIngredIndex;
    // console.log(ingredients[recipeIngredListIndex]);
    console.log("selectIngredIndex", selectedIngredIndex);
  };

  /* ---------- RENDER ---------- */
  render() {
    return this.state.ingredLines.length === 0 ? (
      <p>waiting for ingredients...</p>
    ) : (
      this.state.ingredLines.map((line, i) => (
        <li key={i}>
          <input
            id="qty"
            type="number"
            defaultValue={line.qty}
            data-key={i}
            key={i}
            onChange={this.handleQtyChange}
          />

          <select id="unit" data-key={i} onChange={this.handleUnitChange}>
            <option disabled selected defaultValue={line.unit_id}>
              {this.props.allUnits[line.unit_id - 1].name}
            </option>
            {this.props.allUnits.map((unit, i) => (
              <option value={unit.id} data-key={i} key={i}>
                {unit.name}
              </option>
            ))}
          </select>

          <select
            id="ingredient"
            data-key={i}
            onChange={this.handleIngredChange}
          >
            <option disabled selected defaultValue={line.ingredient_id}>
              {this.props.allIngredients[line.ingredient_id - 1].name}
            </option>
            {this.props.allIngredients.map((ingred, i) => (
              <option value={ingred.id} data-key={i} key={i}>
                {ingred.name}
              </option>
            ))}
          </select>

          <i className="material-icons">close</i>
        </li>
      ))
    );
  }
}

export default IngredField;
