import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuidler extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 1
    }
  };

  render() {
    return (
      <Aux>
        <Burger ing={this.state.ingredients} />
        <BuildControls />
      </Aux>
    );
  }
}

export default BurgerBuidler;
