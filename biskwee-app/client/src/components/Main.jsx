import React from "react";

import NavBar from "./Nav/NavBar";
import Content from "./Content/Content";
// import Register from "./Nav/Register";

const Main = props => {
  return (
    <div>
      <h1>MAIN</h1>
      <NavBar
        handleLogin={props.handleLogin}
        handleLogout={props.handleLogout}
        handleRegister={props.handleRegister}
        handleUserChange={props.handleUserChange}
        user_form={props.user_form}
      />
      <Content />
    </div>
  );
};

export default Main;
