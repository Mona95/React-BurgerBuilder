import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import Aux from "../../hoc/Aux";

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 3,
      bacon: 1,
      cheese: 2,
      meat: 2,
    },
  };
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Burger Controls</div>
      </Aux>
    );
  }
}
