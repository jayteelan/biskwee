import React, { Component } from "react";
import "./App.css";
import newUser from "./api-helper";

import Register from "./components/Nav/Register";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_user: null,
      new_user: {
        email: "",
        // change to password_hash later
        password: "",
        confirm: ""
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
    // console.log("new", this.state.new_user);
    // console.log("key:val", name, value);
  };

  handleRegister = async e => {
    e.preventDefault();
    const formInput = this.state.new_user;
    // hash password and conf
    const register = await newUser(formInput);
    formInput.password === formInput.confirm
      ? // ? this.setState({ current_user: register })
        console.log("hooray")
      : console.log("confirmation does not match password");
    console.log(this.state.current_user);
  };

  render() {
    return (
      <div className="App">
        <Register
          handleChange={this.handleChange}
          new_user={this.state.new_user}
        />
      </div>
    );
  }
}

export default App;
