import React from "react";
import { NavLink } from "react-router-dom";

import Greeting from "./Greeting";

function NavBar(props) {
  return (
    <nav>
      <NavLink to="/recipes">All Recipes</NavLink>
      <NavLink to="/newrecipe">Add a New Recipe</NavLink>
      <Greeting {...props} />
    </nav>
  );
}

export default NavBar;
