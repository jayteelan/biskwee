import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import { createBrowserHistory } from "history";
import { loginUser } from "../../../api-helper";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_form: {
        email: "",
        password: ""
      },
      redirect: false
    };
  }

  /* ---------- EXISTING USER LOGIN ---------- */
  handleLoginInput = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      user_form: { ...prevState.user_form, [name]: value }
    }));
  };

  handleLogin = async e => {
    e.preventDefault();
    const formInput = this.state.user_form;
    const user = await loginUser(formInput);
    // this.setState({ redirect: true });

    // this.setState(this.state);
    console.log(user);
    return user ? <Redirect to="/loginfailed" /> : <Redirect to="/recipes" />;
  };

  render() {
    return (
      <form>
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={this.handleLoginInput}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={this.handleLoginInput}
        />
        <button>Log In</button>
      </form>
    );
  }
}

export default Login;
