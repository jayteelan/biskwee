import React, { Component } from "react";

class IngredList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  mapLI = () => this.props.parsedIngreds.map(ingred => <li>{ingred}</li>);

  componentDidMount = async () => {
    setTimeout(() => console.log(this.props.parsedIngreds), 1500);
  };

  render() {
    return (
      <ul>
        {/* <h3>LIST</h3> */}
        {this.mapLI()}
      </ul>
    );
  }
}

export default IngredList;
