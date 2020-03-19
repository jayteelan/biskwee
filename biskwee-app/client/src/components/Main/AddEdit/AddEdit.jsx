import React, { Component } from "react";

import {
  getData,
  getAllIngredLines,
  deleteIngredLine,
  newRecipe,
  newIngredLine
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
      putIngreds: [],
      delIngreds: [],
      tempMethods: []
      // newMethods: [],
      // putMethods: [],
      // delMethods: []
    };
  }

  /* ---------- LIFECYCLE ---------- */
  componentDidMount = async () => {
    await this.handleDataGet();
    console.log(this.state);
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
    console.log(this.state);
  };

  getNewRecipeId = async e => {
    // e.preventDefault;
    const newName = { name: this.state.tempName, unit_id: 1, image_url: "" };
    const res = await newRecipe(newName);
    this.setState({ currentRecipe: res });
    console.log(this.state);
  };

  /* ---------- HANDLE VALUE CHANGES ---------- */
  handleNameChange = e => {
    // update recipe name in state with text input change
    this.setState({ tempName: e.target.value });
    console.log(this.state.tempName);
  };

  handleQtyChange = e => {
    // update ingredient qty in state with num input change
    const { tempIngredLines } = this.state;
    const index = e.target.getAttribute("data-key");
    tempIngredLines[index].qty = parseInt(e.target.value);
    console.log("qty", tempIngredLines[index].qty, e.target.value);
  };

  handleUnitChange = e => {
    // update ingredient unit in state with unit select change
    const { tempIngredLines } = this.state;
    const recipeUnitListIndex = e.target.getAttribute("data-key");
    const selectedUnitIndex = e.target.selectedIndex - 1;
    tempIngredLines[recipeUnitListIndex].unit_id = selectedUnitIndex;
    console.log("unit", selectedUnitIndex);
  };

  handleIngredChange = e => {
    // update ingredient id in state with ingredient select change
    const { tempIngredLines } = this.state;
    const selectedIngredIndex = e.target.selectedIndex - 1;
    const recipeIngredListIndex = e.target.getAttribute("data-key");
    tempIngredLines[recipeIngredListIndex].ingredient_id = selectedIngredIndex;
    // console.log(ingredients[recipeIngredListIndex]);
    console.log(
      "selectIngredIndex",
      selectedIngredIndex,
      "state",
      this.state.tempIngredLines
    );
  };

  handleNewIngredQty = e => {
    this.state.newIngred.qty = parseInt(e.target.value);
    console.log(this.state.newIngred);
  };
  handleNewIngredUnit = e => {
    this.state.newIngred.unit_id = parseInt(e.target.value);

    console.log(this.state.newIngred);
  };
  handleNewIngredIngred = e => {
    this.state.newIngred.ingredient_id = parseInt(e.target.value);
    console.log(this.state.newIngred);
  };

  handleMethodChange = e => {
    // update method step in state with method textarea change
    const stepIndex = e.target.getAttribute("data-key");
    this.state.tempMethods[stepIndex] = e.target.value;
    console.log("state", this.state.tempMethods);
  };

  /* ---------- HANDLE LINE DELETIONS/ADDITIONS ---------- */
  setIngredDelete = e => {
    this.state.delIngreds.push(e.target.getAttribute("data-line-id"));
    this.state.tempIngredLines.splice(
      e.target.getAttribute("data-line-index"),
      1
    );
    this.setState(this.state);
    console.log("ingred deleted");
  };

  setIngredNew = async e => {
    const recipeId = !this.state._isNewRecipe
      ? this.props.match
      : this.state.currentRecipe.id;
    this.state.newIngred.recipe_id = recipeId;
    const data = JSON.stringify(this.state.newIngred);

    console.log(data);
    const res = await newIngredLine(recipeId, data);
    console.log(res);
    this.state.tempIngredLines.push(this.state.newIngred);
    // this.state.newIngred.qty = null;
    // recipe_id: null,
    // qty: null,
    // unit_id: null,
    // ingredient_id: null
    this.setState(this.state);
  };

  // setIngredPut

  setMethodDelete = e => {
    // this.state.delMethods.push(e.target.getAttribute("stepIndex"));
    this.state.tempMethods[
      e.target.getAttribute("data-step-index")
    ] = undefined;
    this.setState(this.state);
    console.log(this.state);
  };

  handleIngredLineDelete = async e => {
    // remove IngredLine or Method object from temp array in state when user clicks on (X) button
    // deleteIngredLine(this.props.match, e.target.getAttribute("lineId"));
    // this.forceUpdate();
    // console.log(
    //   "recipe",
    //   this.props.match,
    //   "ingred_line",
    //   e.target.getAttribute("line")
    // );
    //(update IngredField/MethodField to remove deleted lines from IngredField map)
  };

  handleRecordAdd = e => {
    // push new IngredLine or Method object into temp array in state when user clicks (+) button
    //(update IngredField/MethodField to add new lines to IngredField map)
  };

  /* ---------- FORM SUBMISSION ---------- */
  prepareRecipeData = e => {
    // compile & JSON.stringify tempData for Recipe endpoint
    return JSON.stringify({
      name: this.state.tempName,
      method: this.state.tempMethods
    });
  };

  prepareIngredData = e => {
    const data = JSON.stringify(this.state.tempIngredLines);
  };
  handleSubmit = () => {
    // POST if _isNewRecipe:true
    // else PUT
  };

  // POST api-helper
  // PUT api-helper
  // DELETE api-helper

  /* ---------- RENDER ---------- */
  render() {
    return (
      this.state._isMounted === true && (
        <form className="add-edit" onSubmit={this.prepareRecipeData}>
          <NameField
            {...this.props}
            _isNewRecipe={this.state._isNewRecipe}
            name={
              this.state.currentRecipe === null
                ? undefined
                : this.state.currentRecipe.name
            }
            // tempName={this.state.tempRecipe.name}
            onNameChange={e => this.handleNameChange(e)}
            onNewRecipe={e => this.getNewRecipeId(e)}
          />

          <h1>Ingredients</h1>
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
          />

          <h1>Method</h1>
          <MethodEditList
            {...this.props}
            _isNewRecipe={this.state._isNewRecipe}
            tempMethods={this.state.tempMethods}
            handleMethodChange={e => this.handleMethodChange(e)}
            setMethodDelete={e => this.setMethodDelete(e)}
          />

          <button>Submit</button>

          {/* Delete Button? */}
        </form>
      )
    );
  }
}

export default AddEdit;
