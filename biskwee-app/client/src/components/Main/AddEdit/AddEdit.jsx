import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import {
  getData,
  getAllIngredLines,
  deleteIngredLine,
  newIngredLine,
  updateIngredLine,
  newRecipe,
  updateRecipe
} from "../../../api-helper";

import NameField from "./NameField";
import IngredEditList from "./IngredEditList";
import MethodEditList from "./MethodEditList";

class AddEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _isMounted: false,
      _isNewRecipe: false,
      currentRecipe: null,
      tempName: "",
      tempIngredLines: [],
      newIngred: {
        recipe_id: null,
        qty: null,
        unit_id: null,
        ingredient_id: null
      },
      updateIngred: {},
      putIngreds: [],
      delIngred: null,
      tempMethods: [],
      newMethod: "",
      redirect: false
    };
  }

  /* ---------- LIFECYCLE ---------- */
  componentDidMount = async () => {
    await this.handleDataGet();
    this.setState({ _isMounted: true });
  };
  componentWillUnmount() {
    this.setState({
      _isMounted: false,
      _isNewRecipe: false,
      currentRecipe: null,
      tempName: "",
      tempIngredLines: [],
      tempMethods: []
    });
  }

  /* ---------- GET API DATA ---------- */
  handleDataGet = async () => {
    // set component to "edit mode" if there's a recipe id passed down thru props, else render a blank form for a new recipe
    this.props.match === undefined
      ? this.setState({ _isNewRecipe: true })
      : await this.getDataSetState();
  };

  getDataSetState = async () => {
    // retrieve current recipe data and set to state
    const res = await getData("recipes", this.props.match);
    this.setState({
      currentRecipe: res,
      tempName: res.name,
      tempMethods: res.method.map(method => method.step)
    });
  };

  handleIngredLinesGet = async id => {
    // retrieve data for current recipe from ingredient-recipe join table and set to state
    const data = await getAllIngredLines(id);
    this.setState({ tempIngredLines: data });
  };

  getNewRecipeId = async e => {
    const newName = { name: this.state.tempName, unit_id: 1, image_url: "" };
    const res = await newRecipe(newName);
    this.setState({ currentRecipe: res });
  };

  /* ---------- HANDLE VALUE CHANGES ---------- */
  handleNameChange = e => {
    // update recipe name in state with text input change
    this.setState({ tempName: e.target.value });
  };

  handleQtyChange = e => {
    // update ingredient qty in state with num input change
    const { tempIngredLines } = this.state;
    const index = e.target.getAttribute("data-key");
    const newVal = parseInt(e.target.value);
    tempIngredLines[index].qty = newVal;
  };

  handleUnitChange = e => {
    // update ingredient unit in state with unit select change
    const { tempIngredLines } = this.state;
    const recipeUnitListIndex = e.target.getAttribute("data-key");
    const selectedUnitIndex = e.target.selectedIndex;
    tempIngredLines[recipeUnitListIndex].unit_id = selectedUnitIndex;
  };

  handleIngredChange = e => {
    // update ingredient id in state with ingredient select change
    const { tempIngredLines } = this.state;
    const selectedIngredIndex = e.target.selectedIndex;
    const recipeIngredListIndex = e.target.getAttribute("data-key");
    tempIngredLines[recipeIngredListIndex].ingredient_id = selectedIngredIndex;
  };

  handleNewIngredQty = e => {
    this.state.newIngred.qty = parseInt(e.target.value);
  };
  handleNewIngredUnit = e => {
    this.state.newIngred.unit_id = parseInt(e.target.value);
  };
  handleNewIngredIngred = e => {
    this.state.newIngred.ingredient_id = parseInt(e.target.value);
  };

  handleUpdateIngredFocus = e => {
    const index = e.target.getAttribute("data-key");
    this.setState({ updateIngred: this.state.tempIngredLines[index] });
  };
  handleUpdateIngredBlur = e => {
    this.state.putIngreds.push(this.state.updateIngred);
  };

  handleMethodChange = e => {
    // update method step in state with method textarea change
    const stepIndex = e.target.getAttribute("data-key");
    this.state.tempMethods[stepIndex] = e.target.value;
  };

  handleNewMethodVal = e => {
    const methodVal = e.target.value;
    this.setState({ newMethod: methodVal });
  };

  /* ---------- HANDLE LINE DELETIONS/ADDITIONS ---------- */
  setIngredDelete = async e => {
    const recipeId = !this.state._isNewRecipe
      ? this.props.match
      : this.state.currentRecipe.id;

    const targetId = e.target.getAttribute("data-line-id");
    this.state.tempIngredLines.splice(
      e.target.getAttribute("data-line-index"),
      1
    );
    await deleteIngredLine(recipeId, targetId);
    this.setState(this.state);
  };

  setIngredNew = async e => {
    const recipeId = !this.state._isNewRecipe
      ? this.props.match
      : this.state.currentRecipe.id;
    this.state.newIngred.recipe_id = recipeId;
    const data = JSON.stringify(this.state.newIngred);
    const res = await newIngredLine(recipeId, data);
    this.state.tempIngredLines.push(this.state.newIngred);
    this.setState(this.state);
  };

  setMethodDelete = e => {
    this.state.tempMethods[
      e.target.getAttribute("data-step-index")
    ] = undefined;
    this.setState(this.state);
  };

  setMethodNew = e => {
    const newMethod = this.state.newMethod;
    this.state.tempMethods.push(newMethod);
    this.setState(this.state);
  };

  /* ---------- FORM SUBMISSION ---------- */
  removeDuplicatePuts = arr => {
    // from (https://stackoverflow.com/questions/2218999/remove-duplicates-from-an-array-of-objects-in-javascript)
    const deDuped = Array.from(new Set(arr.map(JSON.stringify))).map(
      JSON.parse
    );
    return deDuped;
  };

  putChangedIngreds = async () => {
    const recipeId = !this.state._isNewRecipe
      ? this.props.match
      : this.state.currentRecipe.id;
    const toUpdate = this.removeDuplicatePuts(this.state.putIngreds);
    const updateArr = toUpdate.map(
      async ingred => await updateIngredLine(recipeId, ingred.id, ingred)
    );
    await Promise.all(updateArr);
  };

  putChangedRecipeData = async () => {
    // compile tempData for Recipe endpoint
    const recipeId = !this.state._isNewRecipe
      ? this.props.match
      : this.state.currentRecipe.id;
    const newData = {
      name: this.state.tempName,
      method: this.state.tempMethods
    };
    await updateRecipe(recipeId, newData);
  };

  updateAll = async () =>
    await Promise.all([this.putChangedIngreds(), this.putChangedRecipeData()]);

  handleSubmit = e => {
    e.preventDefault();
    !this.state._isNewRecipe ? this.updateAll() : this.putChangedRecipeData();
    this.setState({ redirect: true });
  };

  /* ---------- RENDER ---------- */
  render() {
    return this.state.redirect ? (
      <Redirect to="/recipes" />
    ) : (
      this.state._isMounted === true && (
        <form className="add-edit" onSubmit={e => this.handleSubmit(e)}>
          <NameField
            {...this.props}
            _isNewRecipe={this.state._isNewRecipe}
            name={
              this.state.currentRecipe === null
                ? undefined
                : this.state.currentRecipe.name
            }
            onNameChange={e => this.handleNameChange(e)}
            onNewRecipe={e => this.getNewRecipeId(e)}
          />

          <h1>Ingredients</h1>
          <ul className="col">
            <IngredEditList
              {...this.props}
              _isNewRecipe={this.state._isNewRecipe}
              match={this.props.match}
              tempIngredLines={this.state.tempIngredLines}
              onIngredLinesGet={e => this.handleIngredLinesGet(e)}
              onQtyChange={e => this.handleQtyChange(e)}
              onUnitChange={e => this.handleUnitChange(e)}
              onIngredChange={e => this.handleIngredChange(e)}
              setIngredDelete={e => this.setIngredDelete(e)}
              onIngredLineDelete={e => this.handleIngredLineDelete(e)}
              setIngredNew={e => this.setIngredNew(e)}
              onNewIngredQty={e => this.handleNewIngredQty(e)}
              onNewIngredUnit={e => this.handleNewIngredUnit(e)}
              onNewIngredIngred={e => this.handleNewIngredIngred(e)}
              onUpdateIngredFocus={e => this.handleUpdateIngredFocus(e)}
              onUpdateIngredBlur={e => this.handleUpdateIngredBlur(e)}
            />
          </ul>
          <h1>Method</h1>
          <ul className="col">
            <MethodEditList
              {...this.props}
              _isNewRecipe={this.state._isNewRecipe}
              tempMethods={this.state.tempMethods}
              handleMethodChange={e => this.handleMethodChange(e)}
              setMethodDelete={e => this.setMethodDelete(e)}
              onNewMethodVal={e => this.handleNewMethodVal(e)}
              setMethodNew={e => this.setMethodNew(e)}
            />
          </ul>

          <button>Submit</button>
        </form>
      )
    );
  }
}

export default AddEdit;
