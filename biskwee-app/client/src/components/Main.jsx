import React from "react";

import NavBar from "./Nav/NavBar";
import Content from "./Content/Content";
import Register from "./Nav/Register";

const Main = props => {
  return (
    <div>
      <h1>MAIN</h1>
      <Register />
      {/* <NavBar /> */}
      <Content />
    </div>
  );
};

export default Main;
