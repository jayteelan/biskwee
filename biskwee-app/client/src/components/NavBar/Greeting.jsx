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
    return localStorage.authToken ? (
      <span>
        <h3>Welcome back!</h3>
        <button onClick={this.props.handleLogout}>Log Out</button>
      </span>
    ) : (
      <h3>Welcome to Biskwee!</h3>
    );
  };

  render() {
    return <React.Fragment>{this.handleGreeting()}</React.Fragment>;
  }
}

export default Greeting;
