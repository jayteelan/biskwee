import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { getData, deleteRecipe } from "../../../api-helper";

import IngredList from "./IngredList";
import MethodList from "./MethodList";

class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = { redirect: false };
  }

  componentDidMount = async () => {
    this.setState(await getData("recipes", this.props.match));
  };

  handleDelete = async () => {
    await deleteRecipe(this.props.match);
    this.setState({ redirect: true });
  };

  render() {
    return this.state.redirect ? (
      <Redirect to="/recipes" />
    ) : (
      <div>
        <h1>{this.state.name}</h1>
        <Link to={`/recipes/${this.props.match}/edit`}>Edit this recipe</Link>
        <button onClick={this.handleDelete}>Delete this recipe</button>
        <IngredList {...this.props} />
        <MethodList match={this.props.match} />
      </div>
    );
  }
}

export default Detail;
