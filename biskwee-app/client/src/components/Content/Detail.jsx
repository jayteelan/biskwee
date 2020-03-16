import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
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

  /* ---------- LIST ITEM METHODS ---------- */
  mapIngredLI = () => {
    if (!this.props.parsedIngreds) {
      return <p>loading ingredients...</p>;
    }
    return this.props.parsedIngreds.map((ingred, index) => (
      <li key={index}>{ingred}</li>
    ));
  };

  mapMethodLI = () => {
    if (!this.props.currentRecipe) {
      return <p>loading method...</p>;
    }
    if (this.props.currentRecipe.method) {
      return this.props.currentRecipe.method.map((step, index) => (
        <li key={index}>
          <p>{step.step}</p>
        </li>
      ));
    }
  };

  componentDidMount = () => {
    if (!this.props.recipeIsLoaded) {
      this.props.getRecipe(this.props.match);
    }
    this.setState({ _isMounted: true });
    console.log("DETAIL", this.props);
  };

  componentWillUnmount() {
    this.setState({ _isMounted: false, recipeIsLoaded: false });
  }

  render() {
    if (!this.props.currentRecipe) {
      console.log(this.props);
      return <p>...</p>;
    }
    return (
      <div>
        <h1>{this.props.currentRecipe.name}</h1>
        <Link
          to={{
            pathname: `/recipes/${this.props.match}/edit`,
            state: this.state,
            props: this.props
          }}
        >
          Edit
        </Link>
        <IngredList
          id={this.props.match}
          parsedIngreds={this.props.parsedIngreds}
          recipe={this.props.currentRecipe}
          mapIngredLI={this.mapIngredLI}
        />
        <h3>Method</h3>
        <MethodList
          {...this.props}
          recipe={this.props.currentRecipe}
          mapMethodLI={this.mapMethodLI}
        />
      </div>
    );
  }
}
export default Detail;
