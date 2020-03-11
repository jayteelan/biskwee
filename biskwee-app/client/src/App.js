import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import { getAllData } from "./api-helper";
import Main from "./components/Main";
import NavBar from "./components/Nav/NavBar";
import Register from "./components/Nav/Register";
import LoginFailed from "./components/Content/LoginFailed";
import Detail from "./components/Content/Detail";
import Edit from "./components/Content/Edit";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _isMounted: false,
      current_user: null
    };
  }

  setReferenceData = async () => {
    const res = await Promise.all([
      getAllData("ingredients"),
      getAllData("units"),
      getAllData("categories")
    ]);
    console.log("set", res);
    this.setState({
      all_ingredients: res[0],
      all_units: res[1],
      all_categories: res[2]
    });
    console.log(this.state);
  };

  componentDidMount = async () => {
    this.setState({ _isMounted: true });
    await this.setReferenceData();
    console.log("App Mounted", this.state);
  };
  componentWillUnmount() {
    this.setState({ _isMounted: false });
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
        {/* {this.mountDetails()} */}
        <Route
          exact
          path="/recipes/:recipe_id"
          component={props => {
            return (
              <Detail
                match={props.match.params.recipe_id}
                all_ingredients={this.state.all_ingredients}
                all_units={this.state.all_units}
                all_recipes={this.state.all_recipes}
              />
            );
          }}
        />
        <Route
          exact
          path="/recipes/:recipe_id/edit"
          component={props => {
            return (
              <Edit
                match={props.match.params.recipe_id}
                all_ingredients={this.state.all_ingredients}
                all_units={this.state.all_units}
                all_recipes={this.state.all_recipes}
              />
            );
          }}
        />
        <Route exact path="/login" component={LoginFailed} />
        {/* </Switch> */}
      </div>
    );
  }
}

export default App;
