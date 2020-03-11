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
      all_units: [],
      all_ingredients: [],
      all_categories: [],
      current_user: null,
      current_recipe: {},
      parsedIngreds: []
    };
  }

  setReferenceData = async () => {
    const res = await Promise.all([
      getAllData("ingredients"),
      getAllData("units"),
      getAllData("categories")
    ]);
    this.setState({
      all_ingredients: res[0],
      all_units: res[1],
      all_categories: res[2]
    });
  };

  makeIngred = (qty, unit_id, ingredient_id) => {
    return (
      <span>
        <label for="qty">amount:</label>
        <input id="qty" type="number" value={qty} />

        <label for="unit">unit</label>
        <select id="unit" className="unit_id">
          {/* this will work */}
          {/* {this.state.all_units &&
            console.log("UNITS", this.state.all_units[unit_id - 1])} */}

          {/* but everything breaks if i just add ".name" */}
          {/* {this.state.all_units &&
            console.log("UNITS", this.state.all_units[unit_id - 1].name)} */}

          {/* ...and yet, it still returns the expected data if I wrap it in a setTimeout() */}
          {/* {this.state.all_units &&
            setTimeout(
              () =>
                console.log("UNITS", this.state.all_units[unit_id - 1].name),
              2000
            )} */}

          <option selected="selected">
            {this.state.all_units &&
              setTimeout(() => this.state.all_units[unit_id - 1].name, 2000)}
          </option>

          {this.state.all_units &&
            setTimeout(() =>
              this.state.all_units.map(
                unit => <option value={`${unit.name}`}>{unit.abbrev}</option>,
                2000
              )
            )}
        </select>

        <label for="ingredient">ingredient</label>
        <select id="ingredient" className="ingredient_id">
          (!this.props.all_ingredients)?<p>...</p>:
          <option selected="selected">
            {/* {this.props.all_ingredients[ingredient_id - 1].name} */}
          </option>
          {/* {this.props.all_ingredients.map(ingred => (
          <option value={`${ingred.name}`}>{ingred.name}</option>
        ))} */}
        </select>
      </span>
    );
  };

  /* ---------- RETRIEVE TARGET RECIPE ---------- */
  getRecipe = async id => {
    const recipe = await getData("recipes", id);
    this.setState(
      {
        current_recipe: recipe,
        recipe: recipe,
        ingredArr: recipe.ingredients,
        recipeIsLoaded: true
      },
      () => {
        setTimeout(() => this.parseIngreds(), 1000);
      }
    );
  };

  /* ---------- PARSE INGREDIENT JSON TO HUMAN-READABLE INGREDIENT LIST ---------- */
  parseIngreds = () => {
    const ingredParsed = this.state.ingredArr.map(obj => {
      return `${obj.line.qty}${
        this.state.all_units[obj.line.unit_id - 1].abbrev
      } ${this.state.all_ingredients[obj.line.ingredient_id - 1].name}`;
    });
    this.setState({ parsedIngreds: ingredParsed }, () => {
      console.log("parsed!", this.state.parsedIngreds);
    });
  };

  componentDidMount = async () => {
    this.setState({ _isMounted: true });
    await this.setReferenceData();
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
                parsedIngreds={this.state.parsedIngreds}
                recipeIsLoaded={this.state.recipeIsLoaded}
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
                parsedIngreds={this.state.parsedIngreds}
                makeIngred={this.makeIngred}
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
