import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import { createNewUser, loginUser } from "./api-helper";
import Main from "./components/Main";
import NavBar from "./components/Nav/NavBar";
// import Register from "./components/Nav/Register";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_user: null,
      user_form: {
        email: "",
        // change to password_hash later
        password: ""
        // confirm: ""
      }
    };
  }
  componentDidMount() {
    console.log("update", this.state);
  }

  handleUserChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      user_form: { ...prevState.user_form, [name]: value }
    }));
  };

  handleRegister = async e => {
    e.preventDefault();
    const formInput = this.state.user_form;
    const user = await createNewUser(formInput);
    // console.log("current", currentUser);
    this.setState({ current_user: user });
    console.log(this.state);
  };

  handleLogin = async e => {
    e.preventDefault();
    const formInput = this.state.user_form;
    const user = await loginUser(formInput);
    this.setState({ current_user: user });
  };

  handleLogout = () => {
    localStorage.removeItem("authToken");
    this.setState({
      currentUser: null
    });
    console.log("logged out", localStorage.authToken);
  };

  render() {
    return (
      <div className="App">
        <p>app</p>
        <Main
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
          handleRegister={this.handleRegister}
          handleUserChange={this.handleUserChange}
          user_form={this.state.user_form}
        />
      </div>
    );
  }
}

export default App;
