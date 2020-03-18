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
      // tempRecipe: {
      tempName: "",
      tempIngredLines: []
      // }
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
      currentRecipe: null
    });
  }

  handleDataGet = async () => {
    this.props.match === undefined
      ? this.setState({ _isNewRecipe: true })
      : this.setState({
          currentRecipe: await getData("recipes", this.props.match)
        });
  };

  handleIngredLinesGet = async data => {
    this.setState({ tempIngredLines: await data });
  };

  /* ---------- HANDLE VALUE CHANGES ---------- */
  handleNameChange = e => {
    this.setState({ tempName: e.target.value });
    console.log(this.state.tempName);
  };

  handleQtyChange = e => {
    let index = e.target.getAttribute("data-key");
    console.log("index", index);
    console.log(this.state.tempIngredLines[index]);
    this.setState(prevState => ({
      tempIngredLines: prevState.tempIngredLines.map(obj =>
        obj === this.state.tempIngredLines[index]
          ? { ...obj, qty: parseInt(e.target.value) }
          : obj
      )
    }));
    console.log("qty", this.state);
  };

  handleUnitChange = e => {
    const { ingredLines } = this.state;
    const recipeUnitListIndex = e.target.getAttribute("data-key");
    const selectedUnitIndex = e.target.selectedIndex - 1;
    ingredLines[recipeUnitListIndex].unit_id = selectedUnitIndex;
    console.log("unit", selectedUnitIndex);
  };

  handleIngredChange = e => {
    const { ingredLines } = this.state;
    const selectedIngredIndex = e.target.selectedIndex - 1;
    const recipeIngredListIndex = e.target.getAttribute("data-key");
    ingredLines[recipeIngredListIndex].ingredient_id = selectedIngredIndex;
    // console.log(ingredients[recipeIngredListIndex]);
    console.log("selectIngredIndex", selectedIngredIndex);
  };

  render() {
    return (
      this.state._isMounted === true && (
        <form className="add-edit">
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
            onIngredLinesGet={this.handleIngredLinesGet()}
            onQtyChange={e => this.handleQtyChange(e)}
          />
          {/* <MethodEditList {...this.props} _isNewRecipe={this.state._isNewRecipe} /> */}
        </form>
      )
    );
  }
}

export default AddEdit;
