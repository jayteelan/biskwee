import React, { Component } from "react";
import loginUser from "../../api-helper";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  // componentDidUpdate() {
  //   console.log("Login state", this.state);
  //   console.log("register props", this.props);
  // }

  render() {
    return (
      <form onSubmit={this.props.handleLogin}>
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={this.props.user_form.email}
          onChange={this.props.handleUserChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={this.props.user_form.password}
          onChange={this.props.handleUserChange}
        />
        <button>Log In</button>
      </form>
    );
  }
}

export default Login;
