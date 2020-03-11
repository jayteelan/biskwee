import React, { Component } from "react";

import { getData } from "../../api-helper";
import IngredList from "../Content/Shared/IngredList";
import MethodList from "../Content/Shared/MethodList";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // recipe: undefined,
      _isMounted: false,
      recipeIsLoaded: false
      // ingredIdsLoaded: false,
      // unitIdsLoaded: false
    };
  }

  /* ---------- RETRIEVE TARGET RECIPE ---------- */
  getRecipe = async id => {
    const recipe = await getData("recipes", id);
    this.setState({ recipe: recipe, recipeIsLoaded: true });
    // console.log(this.state);
  };

  // getOneIngredient = i => {
  //   const { qty, unit_id, ingredient_id } = this.state.recipe.ingredients[i];
  //   console.log(`${qty} ${unit_id} ${ingredient_id}`);
  // };
  // getAllIngreds = () => {
  //   const all = [];
  //   this.state.recipe.ingredients.map(ingred => {
  //     all.push(this.getOneIngredient(ingred));
  //     console.log("all", all);
  //   });
  // };

  // /* ---------- GET RECIPE INGREDIENTS ---------- */
  // getIngredientIds = () => {
  //   const objects = this.state.recipe.ingredients;
  //   const id_arr = [];
  //   objects.map(obj => {
  //     id_arr.push(obj.line.ingredient_id);
  //   });
  //   this.setState({ ingredient_ids: id_arr, ingredIdsLoaded: true });
  //   // console.log(this.state);
  //   // console.log("objects", objects);
  // };
  // getIngredientNames = () => {
  //   const ingred_arr = [];
  //   this.state.ingredient_ids.map(id =>
  //     ingred_arr.push(this.props.state.all_ingredients[id - 1].name)
  //   );
  //   this.setState({ recipeIngreds: ingred_arr });
  // };

  // /* ---------- GET UNITS FOR EACH INGREDIENT MEASUREMENT ---------- */
  // getUnitIds = () => {
  //   const objects = this.state.recipe.ingredients;
  //   const unit_arr = [];
  //   objects.map(obj => {
  //     unit_arr.push(obj.line.unit_id);
  //   });
  //   this.setState({ unit_ids: unit_arr, unitIdsLoaded: true });
  // };
  // getUnitNames = () => {
  //   const unit_arr = [];
  //   this.state.unit_ids.map(id =>
  //     unit_arr.push(this.props.state.all_units[id - 1].name)
  //   );
  //   this.setState({ recipeUnits: unit_arr });
  //   console.log("units", this.state);
  // };

  // getQty = () => {
  //   const qty_arr = [];
  //   this.state.recipe.ingredients.map(ingred => qty_arr.push(ingred.line.qty));
  //   this.setState({ qty: qty_arr });
  // };

  /* ---------- MAYBE THIS???? ---------- */
  translateObj = async () => {
    // await this.getRecipe(this.props.match);

    // const { all_units, all_ingredients } = this.props.state;
    const ingredParsed = [];
    const objs = this.state.recipe.ingredients;
    // console.log(objs);
    // if (this.state.recipeIsLoaded === true) {
    objs.map(obj => {
      ingredParsed.push(
        `${obj.line.qty}${this.props.all_units[obj.line.unit_id - 1].abbrev} ${
          this.props.all_ingredients[obj.line.ingredient_id - 1].name
        }`
      );
      // console.log(ingredParsed);
      // this.props.state.all_ingredients[obj.line.ingredient_id - 1].name
    });

    if (this.state._isMounted === true) {
      this.setState({ parsedIngreds: ingredParsed });
    }
    console.log(this.state.parsedIngreds);
    // );
    // }
  };

  componentDidMount = async () => {
    this.state._isMounted = true;
    // this.state.recipeIsLoaded = true;
    await this.getRecipe(this.props.match);
    // while (this.state.recipeIsLoaded === false) {
    //   // do nothing
    // }
    this.state.recipeIsLoaded && this.translateObj();
    // setTimeout(() => this.translateObj(), 3000);
    //   this.state.recipe && this.getIngredientIds();
    //   this.state.recipe && this.getUnitIds();
    //   this.state.recipe && this.getQty();
    //   this.state.ingredIdsLoaded && this.getIngredientNames();
    //   this.state.unitIdsLoaded && this.getUnitNames();
    //   console.log("state", this.state);
    //   // this.forceUpdate();
    // }, 2000);
  };

  componentWillUnmount() {
    this.setState({ _isMounted: false });
  }

  render() {
    return (
      <div>
        <h1>RICETTA</h1>;
        {/* <IngredList {...this.props} state={this.state} /> */}
        {/* {this.translateObj()} */}
        <MethodList {...this.props} />
      </div>
    );
  }
}
export default Detail;
