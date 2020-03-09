import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";

import { newUser } from "./api-helper";
import Main from "./components/Main";
import Register from "./components/Nav/Register";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_user: null,
      new_user: {
        email: "",
        // change to password_hash later
        password: ""
        // confirm: ""
      }
    };
  }
  componentDidMount() {
    console.log("update", this.state);
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      new_user: { ...prevState.new_user, [name]: value }
    }));
  };

  handleRegister = async e => {
    e.preventDefault();
    const formInput = this.state.new_user;
    const user = await newUser(formInput);
    // console.log("current", currentUser);
    this.setState({ current_user: user });
    console.log(this.state);
  };

  handleLogout = () => {
    localStorage.removeItem("authToken");
    this.setState({
      currentUser: null
    });
  };

  render() {
    return (
      <div className="App">
        {/* <Route exact path="/" render={() => <Main />} /> */}
        <Route
          exact
          // path="/register"
          path="/"
          render={() => (
            <Register
              handleRegister={this.handleRegister}
              handleChange={this.handleChange}
              new_user={this.state.new_user}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
