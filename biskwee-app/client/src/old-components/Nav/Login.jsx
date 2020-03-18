import React, { Component } from "react";
import { loginUser } from "../../api-helper";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_form: {
        email: "",
        password: ""
      }
    };
  }
  componentDidMount() {
    //   console.log("Login state", this.state);
    console.log("Login props", this.props);
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
    this.setState({ current_user: user });
  };

  render() {
    return (
      <form onSubmit={this.handleLogin}>
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
