import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import { getData, getAllData } from "./api-helper";
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
      current_user: null,
      current_recipe: {}
    };
  }

  setReferenceData = async () => {
    const res = await Promise.all([
      getAllData("ingredients"),
      getAllData("units"),
      getAllData("categories")
    ]);
    // console.log("set", res);
    this.setState({
      all_ingredients: res[0],
      all_units: res[1],
      all_categories: res[2]
    });
    // console.log(this.state);
  };

  /* ---------- RETRIEVE TARGET RECIPE ---------- */
  getRecipe = async id => {
    const recipe = await getData("recipes", id);
    this.setState({
      current_recipe: recipe,
      recipe: recipe,
      ingredArr: recipe.ingredients,
      recipeIsLoaded: true
      // },
      // () => {
      // this.parseIngreds();
      // this.props.setState({ current_recipe: recipe })
      // console.log(this.props)
    });
  };

  /* ---------- PARSE INGREDIENT JSON TO HUMAN-READABLE INGREDIENT LIST ---------- */
  parseIngreds() {
    const { all_units, all_ingredients } = this.props;
    const ingredParsed = this.state.ingredArr.map(obj => {
      // if (!this.state.ingredArr) {
      //   setTimeout(() => this.getRecipe, 2000);
      // }
      console.log(obj);
      // return `${obj.line.qty}${all_units[obj.line.unit_id - 1].abbrev} ${
      //   all_ingredients[obj.line.ingredient_id - 1].name
      // }`;
    });
    this.setState({ parsedIngreds: ingredParsed }, () => {
      // console.log("parsed!", this.state.parsedIngreds);
    });
  }

  componentDidMount = async () => {
    this.setState({ _isMounted: true });
    await this.setReferenceData();
    // console.log("App Mounted", this.state);
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
                current_recipe={this.state.current_recipe}
                getRecipe={this.getRecipe}
                parseIngreds={this.parseIngreds}
                // all_recipes={this.state.all_recipes}
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
                current_recipe={this.state.current_recipe}
                // all_recipes={this.state.all_recipes}
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
