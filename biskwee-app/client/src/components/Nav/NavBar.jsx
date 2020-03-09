import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../css/Nav.css";
import Register from "./Register";
import Login from "./Login";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("Nav Props", this.props);
  }
  handleUserStatus = () => {
    return localStorage.authToken && localStorage.authToken.length > 9 ? (
      <button onClick={this.props.handleLogout}>Log Out</button>
    ) : (
      <Login
        // handleLogin={this.props.handleLogin}
        // handleUserChange={this.props.handleUserChange}
        user_form={this.props.user_form}
      />
    );
  };

  componentDidUpdate() {
    this.handleUserStatus();
  }

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
