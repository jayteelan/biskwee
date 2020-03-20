import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { getAllData } from "./api-helper";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Login from "./components/Main/Login/Login";
import LoginFailed from "./components/Main/Login/LoginFailed";
import Signup from "./components/Main/Signup/Signup";
import AllRecipes from "./components/Main/AllRecipes/AllRecipes";
import Detail from "./components/Main/Detail/Detail";
import AddEdit from "./components/Main/AddEdit/AddEdit";

class App extends Component {
  constructor() {
    super();
    this.state = {
      _isMounted: false,
      currentUser: "",
      redirect: false
    };
  }

  /* ---------- LIFECYCLE ---------- */
  componentDidMount = async () => {
    this.setReferenceData();
    this.setState({ _isMounted: true });
  };
  componentWillUnmount() {
    this.setState({ _isMounted: false });
  }

  /* ---------- GET INGREDIENT AND UNIT DATA ---------- */
  setReferenceData = async () => {
    const res = await Promise.all([
      getAllData("ingredients"),
      getAllData("units")
    ]);
    console.log("set", res);
    this.setState({
      allIngredients: res[0],
      allUnits: res[1]
    });
    console.log(this.state);
  };

  /* ---------- LOG OUT ---------- */
  handleLogout = () => {
    localStorage.removeItem("authToken");
    this.setState({
      currentUser: null,
      redirect: true
    });
    console.log("logged out", localStorage.authToken);
  };

  // handleLogoutButton = () => {
  //   return localStorage.authToken && localStorage.authToken.length > 9 ?
  // 		<button onClick={this.handleLogout}>Log Out</button> :
  // 		null
  // };

  /* ---------- RENDER ---------- */
  render() {
    return (
      <div className="App">
        <Route
          path="/"
          component={props => {
            return <NavBar handleLogout={this.handleLogout} />;
          }}
        />
        <Switch>
          <Route
            exact
            path="/"
            component={props => {
              return <Main />;
            }}
          />
          <Route
            exact
            path="/login"
            component={props => {
              return <Login />;
            }}
          />
          <Route
            exact
            path="/loginfailed"
            component={props => {
              return <LoginFailed />;
            }}
          />
          <Route
            exact
            path="/signup"
            component={props => {
              return <Signup />;
            }}
          />
          <Route
            exact
            path="/recipes"
            component={props => {
              return <AllRecipes />;
            }}
          />
          <Route
            exact
            path="/recipes/:recipe_id"
            component={props => {
              return (
                <Detail
                  match={props.match.params.recipe_id}
                  allIngredients={this.state.allIngredients}
                  allUnits={this.state.allUnits}
                />
              );
            }}
          />
          <Route
            exact
            path="/recipes/:recipe_id/edit"
            component={props => {
              return (
                <AddEdit
                  match={props.match.params.recipe_id}
                  allIngredients={this.state.allIngredients}
                  allUnits={this.state.allUnits}
                />
              );
            }}
          />
          <Route
            exact
            path="/newrecipe"
            component={props => {
              return (
                <AddEdit
                  allIngredients={this.state.allIngredients}
                  allUnits={this.state.allUnits}
                />
              );
            }}
          />
        </Switch>
        <Route path="/" component={Footer} />
      </div>
    );
  }
}

export default App;
