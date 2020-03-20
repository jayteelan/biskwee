import React, { Component } from "react";
import { getAllIngredLines } from "../../../api-helper";

class IngredList extends Component {
  constructor(props) {
    super(props);

    this.state = { ingredLines: [] };
  }

  componentDidMount = async () => {
    const ingredLines = await getAllIngredLines(this.props.match);
    this.setState({ ingredLines: ingredLines });
    this.state.ingredLines.length > 0 && this.parseIngreds();
  };

  parseIngreds = () => {
    const ingredParsed = this.state.ingredLines.map(obj => {
      return `${obj.qty}${this.props.allUnits[obj.unit_id - 1].abbrev} ${
        this.props.allIngredients[obj.ingredient_id - 1].name
      }`;
    });
    this.setState({ parsedIngreds: ingredParsed }, () => {});
  };

  render() {
    return !this.state.parsedIngreds ? (
      <p>loading ingredients...</p>
    ) : (
      <React.Fragment>
        <h1>Ingredients</h1>
        <ul className="align-left">
          {this.state.parsedIngreds.map(el => (
            <li>{el}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default IngredList;
