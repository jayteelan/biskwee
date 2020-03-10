import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

// import { createNewUser, loginUser } from "./api-helper";
import Main from "./components/Main";
// import NavBar from "./components/Nav/NavBar";
import Register from "./components/Nav/Register";
import LoginFailed from "./components/Content/LoginFailed";
import Detail from "./components/Content/Detail";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_user: null
    };
  }
  componentDidMount() {
    console.log("update", this.state);
  }

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
          // handleLogin={this.handleLogin}
          // handleUserChange={this.handleLoginInput}
          // user_form={this.state.user_form}
          // handleRegister={this.handleRegister}
          // handleRegisterInput={this.handleRegisterInput}
          // signup={this.state.signup}
          current_user={this.state.current_user}
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
        <Route
          exact
          path="/recipes/:recipe_id"
          component={props => {
            return <Detail {...props} match={props.match.params.recipe_id} />;
          }}
        />
        <Route exact path="/login" component={LoginFailed} />
      </div>
    );
  }
}

export default App;
