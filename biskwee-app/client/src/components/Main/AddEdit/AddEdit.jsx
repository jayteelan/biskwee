import React, { Component } from "react";

import { getData } from "../../../api-helper";

import NameField from "./NameField";
import IngredEditList from "./IngredEditList";
import MethodEditList from "./MethodEditList";

class AddEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _isMounted: false,
      _isNewRecipe: false,
      currentRecipe: null
    };
  }

  componentDidMount = async () => {
    await this.handleDataGet();
    console.log(this.state);
    this.setState({ _isMounted: true });
  };
  componentWillUnmount() {
    this.setState({
      _isMounted: false,
      _isNewRecipe: false,
      currentRecipe: null
    });
  }

  handleDataGet = async () => {
    this.props.match === undefined
      ? this.setState({ _isNewRecipe: true })
      : this.setState({
          currentRecipe: await getData("recipes", this.props.match)
        });
  };

  render() {
    return (
      this.state._isMounted === true && (
        <form className="add-edit">
          <NameField
            {...this.props}
            _isNewRecipe={this.state._isNewRecipe}
            name={
              this.state.currentRecipe === null
                ? undefined
                : this.state.currentRecipe.name
            }
          />
          {/* <IngredEditList {...props} />
      <MethodEditList {...props} /> */}
        </form>
      )
    );
  }
}

export default AddEdit;
