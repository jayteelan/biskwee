import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { getAllData } from "../../../api-helper";
import Card from "../AllRecipes/Card";
import CardList from "../AllRecipes/CardList";

import "../../../css/Card.css";

class AllRecipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allIngredients: [],
      allUnits: []
    };
  }

  render() {
    return (
      <div className="all-recipes">
        <h1>RECIPES</h1>
        <CardList />
      </div>
    );
  }
}

export default AllRecipes;
