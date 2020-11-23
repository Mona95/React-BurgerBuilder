import React from "react";
import useStyles from "./Burger.style.js";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
  let classes = useStyles();
  const transformedIngredients = Object.keys(props.ingredients).map((igKey) => {
    return [...Array(props.ingredients[igKey])].map((_, i) => (
      <BurgerIngredient key={igKey + i} type={igKey} />
    ));
  });

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
