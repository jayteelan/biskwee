import React, { Component } from "react";
import { getAllIngredLines, deleteIngredLine } from "../../../api-helper";

class IngredField extends Component {
  constructor(props) {
    super(props);

    this.state = { ingredLines: [] };
  }

  /* ---------- LIFECYCLE ---------- */
  componentDidMount = async () => {
    const data = await getAllIngredLines(this.props.match);
    console.log(data);
    this.props.onIngredLinesGet(data);
    // console.log("INGREDLIST", this.state);
    console.log("INGRProps", this.props);
  };

  componentWillUnmount = () => {
    this.setState({ ingredLines: [] });
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
            onChange={e => this.props.onQtyChange(e)}
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
