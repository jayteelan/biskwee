import React from "react";

import Greeting from "./Greeting";

function NavBar(props) {
  return (
    <nav>
      <h3>Nav</h3>
      <Greeting {...props} />
    </nav>
  );
}

export default NavBar;
