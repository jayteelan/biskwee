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

  componentDidMount = () => {
    if (!this.props.recipeIsLoaded) {
      this.props.getRecipe(this.props.match);
    }
    this.setState({ _isMounted: true });
  };

  componentWillUnmount() {
    this.setState({ _isMounted: false, recipeIsLoaded: false });
  }

  render() {
    if (!this.props.current_recipe) {
      console.log(this.props);
      return <p>...</p>;
    }
    return (
      <div>
        <h1>{this.props.current_recipe.name}</h1>
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
          recipe={this.props.current_recipe}
        />
        <MethodList {...this.props} recipe={this.props.current_recipe} />
      </div>
    );
  }
}
export default Detail;
