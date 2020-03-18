import React, { Component } from "react";
import { getData } from "../../../api-helper";

class MethodList extends Component {
  constructor(props) {
    super(props);

    this.state = { method: [] };
  }
  componentDidMount = async () => {
    const res = await getData("recipes", this.props.match);
    // console.log("METHOD", res);
    this.setState({ method: res.method });
    console.log(this.state);
  };

  //   mapMethodLI = () => {
  //   if (!this.props.currentRecipe) {
  //     return <p>loading method...</p>;
  //   }
  //   if (this.props.currentRecipe.method) {
  // return this.state.method.map((step, index) => (
  //   <li key={index}>
  //     <p>{step.step}</p>
  //   </li>
  // ));
  //   }
  // };

  render() {
    return this.state.method.length === 0 ? (
      <p>loading method...</p>
    ) : (
      <React.Fragment>
        <h1>Method</h1>
        <ol>
          {this.state.method.map((step, index) => (
            <li key={index}>
              <p>{step.step}</p>
            </li>
          ))}
        </ol>
      </React.Fragment>
    );
  }
}

export default MethodList;
