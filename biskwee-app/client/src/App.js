import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import { createNewUser, loginUser } from "./api-helper";
import Main from "./components/Main";
import NavBar from "./components/Nav/NavBar";
import Register from "./components/Nav/Register";
import LoginFailed from "./components/Content/LoginFailed";
// import Register from "./components/Nav/Register";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_user: null
      // user_form: {
      //   email: "",
      //   // change to password_hash later
      //   password: ""
      //   // confirm: ""
      // },
      // signup: {
      //   email: "",
      //   password: "",
      //   password_confirmation: ""
      // }
    };
  }
  componentDidMount() {
    console.log("update", this.state);
  }

  // /* ---------- EXISTING USER LOGIN ---------- */
  // handleLoginInput = e => {
  //   const { name, value } = e.target;
  //   this.setState(prevState => ({
  //     user_form: { ...prevState.user_form, [name]: value }
  //   }));
  // };

  // handleLogin = async e => {
  //   e.preventDefault();
  //   const formInput = this.state.user_form;
  //   const user = await loginUser(formInput);
  //   this.setState({ current_user: user });
  // };

  // /* ---------- NEW USER REGISTRATION ---------- */
  // handleRegisterInput = e => {
  //   const { name, value } = e.target;
  //   this.setState(prevState => ({
  //     signup: { ...prevState.signup, [name]: value }
  //   }));
  // };

  // handleRegister = async e => {
  //   e.preventDefault();
  //   const formInput = this.state.signup;
  //   const user = await createNewUser(formInput);
  //   // console.log("current", currentUser);
  //   this.setState({ current_user: user });
  //   console.log(this.state);
  // };

  /* ---------- LOG OUT ---------- */
  handleLogout = () => {
    localStorage.removeItem("authToken");
    this.setState({
      currentUser: null
    });
    console.log("logged out", localStorage.authToken);
  };

  /* ---------- RENDER ---------- */
  render() {
    return (
      <div className="App">
        <p>app</p>
        <Main
          handleLogin={this.handleLogin}
          handleUserChange={this.handleLoginInput}
          user_form={this.state.user_form}
          handleRegister={this.handleRegister}
          handleRegisterInput={this.handleRegisterInput}
          signup={this.state.signup}
          handleLogout={this.handleLogout}
        />
        <Route
          exact
          path="/register"
          component={props => {
            return (
              <Register
                handleRegister={this.handleRegister}
                handleRegisterInput={this.handleRegisterInput}
                signup={this.state.signup}
              />
            );
          }}
        />
        <Route exact path="/login" component={LoginFailed} />
      </div>
    );
  }
}

export default App;
