import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { createNewUser } from "../../../api-helper";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signup: {
        email: "",
        password: "",
        password_confirmation: ""
      },
      redirect: false
    };
  }

  /* ---------- NEW USER REGISTRATION ---------- */
  handleSignupInput = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      signup: { ...prevState.signup, [name]: value }
    }));
    console.log(this.state);
  };

  handleSignup = async e => {
    e.preventDefault();
    const formInput = this.state.signup;
    console.log("form", formInput);
    const user = await createNewUser(JSON.stringify(formInput));
    this.setState({ redirect: true, current_user: user });
    console.log("reg", this.state);
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/recipes" />;
    }

    return (
      <form onSubmit={this.handleSignup}>
        <h1>Signup</h1>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={this.handleSignupInput}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={this.handleSignupInput}
        />
        <input
          type="password"
          name="password_confirmation"
          placeholder="confirm password"
          onChange={this.handleSignupInput}
        />
        <button>Signup</button>
      </form>
    );
  }
}

export default Signup;
