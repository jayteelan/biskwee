import React, { Component } from "react";

class IngredList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  mapLI = () => {
    if (!this.props.parsedIngreds) {
      return <p>loading ingredients...</p>;
    }
    return this.props.parsedIngreds.map((ingred, index) => (
      <li key={index}>{ingred}</li>
    ));
  };

  componentDidMount = async () => {
    // console.log("inli", this.props);
    // setTimeout(() => console.log(this.props.parsedIngreds), 1500);
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
