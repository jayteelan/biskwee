import React, { Component } from "react";
import { createNewUser } from "../../api-helper";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signup: {
        email: "",
        password: "",
        password_confirmation: ""
      }
    };
  }
  componentDidMount() {
    console.log("Register state", this.state);
    console.log("register props", this.props);
  }
  /* ---------- NEW USER REGISTRATION ---------- */
  handleRegisterInput = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      signup: { ...prevState.signup, [name]: value }
    }));
  };

  handleRegister = async e => {
    e.preventDefault();
    const formInput = this.state.signup;
    const user = await createNewUser(formInput);
    // console.log("current", currentUser);
    this.setState({ current_user: user });
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleRegister}>
        <h1>Register</h1>
        <input
          type="email"
          name="email"
          placeholder="email"
          // value={this.state.signup.email}
          onChange={this.handleRegisterInput}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          // value={this.state.signup.password}
          onChange={this.handleRegisterInput}
        />
        <input
          type="password"
          name="password_confirmation"
          placeholder="confirm password"
          // value={this.state.signup.password_confirmation}
          onChange={this.handleRegisterInput}
        />
        <button>Register</button>
      </form>
    );
  }
}

export default Register;
