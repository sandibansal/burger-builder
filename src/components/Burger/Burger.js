import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = props => {
  const { ing } = props;

  const ingKeysArr = Object.keys(ing);

  const transformedIngredients = [];
  ingKeysArr.forEach(function(ingKey) {
    for (let i = 1; i <= ing[ingKey]; i++) {
      transformedIngredients.push(ingKey);
    }
  });

  const ingredients = transformedIngredients.map((ingredient, index) => {
    return <BurgerIngredient key={ingredient + index} type={ingredient} />;
  });

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
