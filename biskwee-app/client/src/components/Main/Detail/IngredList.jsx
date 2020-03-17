import React, { Component } from "react";
import { getAllIngredLines } from "../../../api-helper";

class IngredList extends Component {
  constructor(props) {
    super(props);

    this.state = { ingredLines: [] };
  }

  parseIngreds = () => {
    const ingredParsed = this.state.ingredLines.map(obj => {
      return `${obj.qty}${this.props.allUnits[obj.unit_id - 1].abbrev} ${
        this.props.allIngredients[obj.ingredient_id - 1].name
      }`;
    });
    this.setState({ parsedIngreds: ingredParsed }, () => {
      console.log("parsed!", this.state);
    });
  };

  componentDidMount = async () => {
    // console.log("INGRED", this.props);
    const ingredLines = await getAllIngredLines(this.props.match);
    this.setState({ ingredLines: ingredLines });
    console.log("INGREDLIST", this.state);
    this.state.ingredLines.length > 0 && this.parseIngreds();
  };

  render() {
    return !this.state.parsedIngreds ? (
      <p>...</p>
    ) : (
      <React.Fragment>
        <h1>Ingredients</h1>
        <ul>
          {this.state.parsedIngreds.map(el => (
            <li>{el}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default IngredList;
