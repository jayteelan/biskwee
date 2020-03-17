import React, { Component } from "react";

class Greeting extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    console.log(this.props);
  }
  handleGreeting = () => {
    return this.props._isUserLoggedIn === true ? (
      <h3>Welcome back!</h3>
    ) : (
      <h3>Welcome to Biskwee!</h3>
    );
  };

  render() {
    return <React.Fragment>{this.handleGreeting()}</React.Fragment>;
  }
}

export default Greeting;
