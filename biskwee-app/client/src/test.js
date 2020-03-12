import React, { Component } from "react";
import update from "immutability-helper";

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: {
        name: "Pâte à Choux ",
        yield_qty: 800,
        unit_id: 1,
        ingredients: [
          { qty: 180, unit_id: 1, ingredient_id: 31 },
          { qty: 120, unit_id: 1, ingredient_id: 2 },
          { qty: 120, unit_id: 1, ingredient_id: 11, notes: "cut into pieces" },
          { qty: 30, unit_id: 1, ingredient_id: 13 },
          { qty: 2, unit_id: 1, ingredient_id: 38 },
          { qty: 150, unit_id: 1, ingredient_id: 14 },
          { qty: 4, unit_id: 15, ingredient_id: 6 }
        ],
        method: [
          "Place water, milk, butter, condensed milk, and salt into saucepan and bring to a full rolling boil.",
          "Add the flour all at once to the boiling mixture. Stir with wooden spoon or heatproof spatula until a smooth mass forms.",
          "Keep cooking and stirring it around over moderate heat to dry out the dough as much as possible, about 2-3 minutes.",
          "Transfer dough to mixer bowl. With the paddle attachment, beat at medium speed to release steam and cool a bit for one minute.",
          "At low speed, beat in the eggs, one at a time, beating until incorporated between additions. The dough should look smooth and glossy, stiff but not dry.",
          "Transfer dough to a pastry bag with a plain tip and pipe out as desired."
        ],
        image_url:
          "https://assets.marthastewart.com/styles/wmax-1500/d22/mb_1008_pate_a_choux_2/mb_1008_pate_a_choux_2_horiz.jpg",
        notes: "yield is approximate",
        parent_recipes: [3]
      }
    };
  }

  testUpdate = () => {
    const { ingredients } = this.state.recipe;
    console.log("TEST initial", ingredients[5]);
    const newObj = update(ingredients, { 5: { qty: { $set: 99 } } });
    console.log("TEST new", newObj);
    this.setState({ recipe: { ingredients: newObj } });
    console.log("state", this.state);
    // this.forceUpdate();
  };

  componentDidMount() {
    this.testUpdate();
  }
  componentDidUpdate() {
    console.log("update", this.state);
  }

  render() {
    return <h1>TEST</h1>;
  }
}

export default Test;
