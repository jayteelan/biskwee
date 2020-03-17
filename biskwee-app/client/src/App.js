import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Login from "./components/Main/Login/Login";
import Signup from "./components/Main/Signup/Signup";

class App extends Component {
  constructor() {
    super();
    this.state = {
      _isMounted: false,
      _isUserLoggedIn: false,
      current_user: ""
    };
  }

  /* ---------- LIFECYCLE ---------- */
  componentDidMount = async () => {
    this.setState({ _isMounted: true });
  };
  componentWillUnmount() {
    this.setState({ _isMounted: false });
  }

  /* ---------- RENDER ---------- */
  render() {
    return (
      <div className="App">
        <Route
          path="/"
          component={props => {
            return (
              <NavBar
              // _isUserLoggedIn={this.state._isUserLoggedIn}
              />
            );
          }}
        />
        <Switch>
          <Route
            exact
            path="/"
            component={props => {
              return (
                <Main
                // _isUserLoggedIn={this.state._isUserLoggedIn}
                />
              );
            }}
          />
          <Route
            exact
            path="/login"
            component={props => {
              return (
                <Login
                // _isUserLoggedIn={this.state._isUserLoggedIn}
                />
              );
            }}
          />
          <Route
            exact
            path="/signup"
            component={props => {
              return <Signup />;
            }}
          />
        </Switch>
        <Route path="/" component={Footer} />
      </div>
    );
  }
}

export default App;
