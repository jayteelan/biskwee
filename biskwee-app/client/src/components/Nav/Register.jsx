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
          value={this.props.new_user.email}
          onChange={this.props.handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={this.props.new_user.password}
          onChange={this.props.handleChange}
        />
        <button>Register</button>
      </form>
    );
  }
}

export default Register;
