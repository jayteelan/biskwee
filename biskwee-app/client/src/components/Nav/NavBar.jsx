import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../css/Nav.css";
import Register from "./Register";
import Login from "./Login";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  handleUserStatus = () => {
    return localStorage.authToken && localStorage.authToken.length > 9 ? (
      <button onClick={this.props.handleLogout}>Log Out</button>
    ) : (
      <Login {...this.props} />
    );
  };

  render() {
    return (
      <div className="nav">
        <Link
          to={{
            pathname: "/register"
            // handleRegister: this.props.handleRegister,
            // handleRegisterInput: this.props.handleRegisterInput,
            // signup: this.props.signup
          }}
        >
          Sign Up!
        </Link>
        {/* <Register
          handleRegister={this.props.handleRegister}
          handleRegisterInput={this.props.handleRegisterInput}
          signup={this.props.signup}
        /> */}
        {this.handleUserStatus()}
      </div>
    );
  }
}

export default NavBar;
