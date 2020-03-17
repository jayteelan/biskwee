import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
