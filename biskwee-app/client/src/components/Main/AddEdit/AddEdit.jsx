import React, { Component } from "react";

import { getData, getAllIngredLines } from "../../../api-helper";

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
      tempMethods: []
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
      : this.setState({
          currentRecipe: await getData("recipes", this.props.match)
        });
  };

  handleIngredLinesGet = async id => {
    // retrieve data for current recipe from ingredient-recipe join table and set to state
    const data = await getAllIngredLines(id);
    this.setState({ tempIngredLines: data });
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
    let index = e.target.getAttribute("data-key");
    // console.log("TARGET", e.target.value);
    // console.log("KEY", this.state.tempIngredLines[index]);
    // console.log("qty", this.state);
    this.setState(prevState => ({
      tempIngredLines: prevState.tempIngredLines.map(el => console.log(el))
    }));
    0;
    console.log("state", this.state);
  };

  handleUnitChange = e => {
    // update ingredient unit in state with unit select change
    const { ingredLines } = this.state;
    const recipeUnitListIndex = e.target.getAttribute("data-key");
    const selectedUnitIndex = e.target.selectedIndex - 1;
    ingredLines[recipeUnitListIndex].unit_id = selectedUnitIndex;
    console.log("unit", selectedUnitIndex);
  };

  handleIngredChange = e => {
    // update ingredient id in state with ingredient select change
    const { ingredLines } = this.state;
    const selectedIngredIndex = e.target.selectedIndex - 1;
    const recipeIngredListIndex = e.target.getAttribute("data-key");
    ingredLines[recipeIngredListIndex].ingredient_id = selectedIngredIndex;
    // console.log(ingredients[recipeIngredListIndex]);
    console.log("selectIngredIndex", selectedIngredIndex);
  };

  /* ---------- HANDLE LINE DELETIONS/ADDITIONS ---------- */
  handleRecordDelete = e => {
    // remove IngredLine or Method object from temp array in state when user clicks on (X) button
    //(update IngredField/MethodField to remove deleted lines from IngredField map)
  };

  handleRecordAdd = e => {
    // push new IngredLine or Method object into temp array in state when user clicks (+) button
    //(update IngredField/MethodField to add new lines to IngredField map)
  };

  /* ---------- FORM SUBMISSION ---------- */
  handleSubmit = () => {
    // POST if _isNewRecipe:true
    // else PUT
  };

  // compile & JSON.stringify tempData
  // POST api-helper
  // PUT api-helper
  // DELETE api-helper

  /* ---------- RENDER ---------- */
  render() {
    return (
      this.state._isMounted === true && (
        <form
          className="add-edit"
          onSubmit={/* JSON.stringify temp data in state and send to API */}
        >
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
          />

          <IngredEditList
            {...this.props}
            _isNewRecipe={this.state._isNewRecipe}
            match={this.props.match}
            tempIngredLines={this.state.tempIngredLines}
            onIngredLinesGet={e => this.handleIngredLinesGet(e)}
            onQtyChange={e => this.handleQtyChange(e)}
          />

          {/* <MethodEditList {...this.props} _isNewRecipe={this.state._isNewRecipe} /> */}

          <button>Submit</button>

          {/* Delete Button? */}
        </form>
      )
    );
  }
}

export default AddEdit;
