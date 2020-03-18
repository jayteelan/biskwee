import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getAllData } from "../../../api-helper";

import Card from "../AllRecipes/Card";
import Detail from "../Detail/Detail";

class CardList extends Component {
  constructor(props) {
    super(props);

    this.state = { allRecipes: [] };
  }
  componentDidMount = () => {
    this.makeCards();
  };

  makeCards = async () => {
    const recipeArr = await getAllData("recipes");
    // console.log("recipe", recipeArr);
    this.setState({ allRecipes: recipeArr });
  };

  render() {
    return (
      <ul>
        {!this.state.allRecipes.length < 1 &&
          this.state.allRecipes.map(rec => (
            <li key={rec.id}>
              <Link to={{ pathname: `/recipes/${rec.id}`, props: this.props }}>
                <Card
                  id={rec.id}
                  name={rec.name}
                  image_url={
                    rec.image_url.length > 1
                      ? rec.image_url
                      : "http://placekitten.com/700/700"
                  }
                  props={this.props}
                />
              </Link>
            </li>
          ))}
      </ul>
    );
  }
}

export default CardList;
