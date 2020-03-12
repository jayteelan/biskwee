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
import Test from "./test";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _isMounted: false,
      allUnits: [],
      allIngredients: [],
      current_user: null,
      currentRecipe: {},
      parsedIngreds: [],
      newRecipe: {
        name: "",
        ingredients: [],
        method: []
      }
    };
  }

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

  /* ---------- RETRIEVE TARGET RECIPE ---------- */
  getRecipe = async id => {
    const recipe = await getData("recipes", id);
    this.setState(
      {
        currentRecipe: recipe,
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
        this.state.allUnits[obj.line.unit_id - 1].abbrev
      } ${this.state.allIngredients[obj.line.ingredient_id - 1].name}`;
    });
    this.setState({ parsedIngreds: ingredParsed }, () => {
      // console.log("parsed!", this.state.parsedIngreds);
    });
  };

  /* ---------- HANDLE NEW DATA ---------- */

  handleNewMethod = e => {
    console.log(e.target.value);
    this.state.newRecipe.tempMethod = e.target.value;
  };
  handleMethodSubmit = e => {
    this.state.newRecipe.method.push(this.state.newRecipe.tempMethod);
    this.setState({ tempMethod: "" });
    console.log(this.state.newRecipe.method);
  };

  /* ---------- ADD NEW LINES ---------- */
  addMethod = () => {
    return (
      <li>
        <textarea
          id="step"
          cols="75"
          rows="5"
          placeholder="Add a new step"
          onChange={this.handleNewMethod}
        />
        <i className="material-icons" onClick={this.handleMethodSubmit}>
          add_circle_outline
        </i>
      </li>
    );
  };

  addIngred = () => {
    return (
      <li>
        <input id="qty" type="number" placeholder="qty" />

        <select id="unit">
          <option disabled selected>
            unit
          </option>
          {this.state.allUnits.map((unit, i) => (
            <option value={unit.id}>{unit.name}</option>
          ))}
        </select>

        <select id="ingredient">
          <option disabled selected>
            ingredient
          </option>
          {this.state.allIngredients.map((ingred, i) => (
            <option value={ingred.id}>{ingred.name}</option>
          ))}
        </select>

        <i class="material-icons">add_circle_outline</i>
      </li>
    );
  };

  /* ---------- LIFECYCLE ---------- */
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
                allIngredients={this.state.allIngredients}
                allUnits={this.state.allUnits}
                currentRecipe={this.state.currentRecipe}
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
                allIngredients={this.state.allIngredients}
                allUnits={this.state.allUnits}
                currentRecipe={this.state.currentRecipe}
                parsedIngreds={this.state.parsedIngreds}
                newRecipe={this.state.newRecipe}
                addIngred={this.addIngred}
                addMethod={this.addMethod}
                handleNewMethod={this.handleNewMethod}
                addlMethods={this.state.newRecipe.method}
              />
            );
          }}
        />
        <Route exact path="/login" component={LoginFailed} />
        {/* <Route exact path="/test" component={Test} /> */}
        {/* </Switch> */}
      </div>
    );
  }
}

export default App;
