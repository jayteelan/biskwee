import React from "react";

import NavBar from "./Nav/NavBar";
import Content from "./Content/Content";
// import Register from "./Nav/Register";

const Main = props => {
  return (
    <div>
      <h1>MAIN</h1>
      <NavBar
        {...props}
        // handleLogin={props.handleLogin}
        // handleLoginInput={props.handleLoginInput}
        // user_form={props.user_form}
        // handleRegister={props.handleRegister}
        // handleRegisterInput={props.handleRegisterInput}
        // signup={props.signup}
        // handleLogout={props.handleLogout}
      />
      <Content />
    </div>
  );
};

export default Main;
