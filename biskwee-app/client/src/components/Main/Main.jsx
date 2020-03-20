import React, { Component } from "react";
import { Link } from "react-router-dom";

import Login from "../Main/Login/Login";
import Signup from "../Main/Signup/Signup";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _isMounted: false
    };
  }

  /* ---------- LIFECYCLE ---------- */
  componentDidMount = async () => {
    this.setState({ _isMounted: true });
  };
  componentWillUnmount() {
    this.setState({ _isMounted: false });
  }
  handleLogin = () => {
    return !localStorage.authToken ? (
      <span>
        <Login /> or <Link to="/signup">Sign up for a new account</Link>
      </span>
    ) : null;
  };

  render() {
    return <h1>{this.handleLogin()}</h1>;
  }
}

export default Main;
