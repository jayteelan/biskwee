import React from "react";

import NavBar from "./Nav/NavBar";
import Content from "./Content/Content";

const Main = props => {
  return (
    <div>
      <h1>MAIN</h1>
      <NavBar {...props} />
      <Content />
    </div>
  );
};

export default Main;
