import React, { Component } from "react";
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
      <Login
        handleLogin={this.props.handleLogin}
        handleUserChange={this.props.handleUserChange}
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
        <Register
          handleRegister={this.props.handleRegister}
          handleUserChange={this.props.handleUserChange}
          user_form={this.props.user_form}
        />
        {this.handleUserStatus()}
      </div>
    );
  }
}

export default NavBar;
