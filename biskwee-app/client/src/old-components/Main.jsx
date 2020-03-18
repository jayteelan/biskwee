import React from "react";

import NavBar from "./Nav/NavBar";
import Content from "./Content/Content";

const Main = props => {
  return (
    <div>
      <h1>MAIN</h1>
      <h2>IT IS A BAD IDEA TO NEST YOUR DATA MULTIPLE LAYERS DEEP</h2>
      <h2>
        IF YOU DISREGARD MICHAEL'S SUGGESTION TO JUST USE STRINGS, YOU'RE GONNA
        HAVE A BAD TIME
      </h2>
      <NavBar {...props} />
      <Content />
    </div>
  );
};

export default Main;
