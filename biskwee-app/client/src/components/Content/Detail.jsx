import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getData } from "../../api-helper";
import IngredList from "../Content/Shared/IngredList";
import MethodList from "../Content/Shared/MethodList";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _isMounted: false,
      recipeIsLoaded: false
    };
  }

  /* ---------- RETRIEVE TARGET RECIPE ---------- */
  getRecipe = async id => {
    const recipe = await getData("recipes", id);
    this.setState(
      {
        recipe: recipe,
        ingredArr: recipe.ingredients,
        recipeIsLoaded: true
      },
      () => {
        this.parseIngreds();
        // console.log(this.state.recipe);
      }
    );
  };

  /* ---------- PARSE INGREDIENT JSON TO HUMAN-READABLE INGREDIENT LIST ---------- */
  parseIngreds() {
    const { all_units, all_ingredients } = this.props;
    const ingredParsed = this.state.ingredArr.map(obj => {
      if (!this.state.ingredArr) {
        setTimeout(() => this.getRecipe, 2000);
      }
      return `${obj.line.qty}${all_units[obj.line.unit_id - 1].abbrev} ${
        all_ingredients[obj.line.ingredient_id - 1].name
      }`;
    });
    this.setState({ parsedIngreds: ingredParsed }, () => {
      // console.log("parsed!", this.state.parsedIngreds);
    });
  }

  // waitForProp = prop => {
  //   if (!this.state.recipe) {
  //     console.log(this.props);
  //     return <p>...</p>;
  //   }
  //   return <h1>{`${prop}`}</h1>;
  // };

  componentDidMount = () => {
    // setTimeout(async () => await this.getRecipe(this.props.match), 1000);
    if (!this.state.recipeIsLoaded) {
      console.log("loading");
      this.getRecipe(this.props.match);
    }
    this.setState({ _isMounted: true });
  };

  componentWillUnmount() {
    this.setState({ _isMounted: false, recipeIsLoaded: false });
  }

  render() {
    if (!this.state.recipe) {
      console.log(this.props);
      return <p>...</p>;
    }
    return (
      <div>
        {/* <img src={require(`${this.state.recipe.img_url}`)} /> */}
        <h1>{this.state.recipe.name}</h1>
        <Link
          to={{
            pathname: `/recipes/${this.props.match}/edit`,
            state: {
              ...this.state
            }
          }}
        >
          Edit
        </Link>
        {/* {this.waitForProp("this.state.recipe.name")} */}
        <IngredList
          id={this.props.match}
          parsedIngreds={this.state.parsedIngreds}
          // recipe={this.state.recipe}
        />
        <MethodList {...this.props} recipe={this.state.recipe} />
      </div>
    );
  }
}
export default Detail;
