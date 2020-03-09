import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  // componentDidUpdate() {
  //   console.log("Register state", this.state);
  //   console.log("register props", this.props);
  // }

  render() {
    return (
      <form onSubmit={this.props.handleRegister}>
        <h1>Register</h1>
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
        <button>Register</button>
      </form>
    );
  }
}

export default Register;
