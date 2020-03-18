import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _isMounted: false
    };
  }

  /* ---------- LIFECYCLE ---------- */
  componentDidMount = async () => {
    this.setState({ _isMounted: true });
  };
  componentWillUnmount() {
    this.setState({ _isMounted: false });
  }

  render() {
    return <h1>MAIN</h1>;
  }
}

export default Main;
