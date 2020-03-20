import React from "react";
import CardList from "../AllRecipes/CardList";

import "../../../css/Card.css";

const AllRecipes = props => {
  return (
    <div className="all-recipes">
      <h1>RECIPES</h1>
      <CardList {...props} />
    </div>
  );
};

export default AllRecipes;
