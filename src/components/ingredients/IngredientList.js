import React from "react";
import Ingredient from "./Ingredient";

const IngredientList = (props) => {
  return (
    <article className="ingredientList">
      {props.ingredients.map((ingredient) => (
        <Ingredient
          key={ingredient.id}
          getIngredients={props.getIngredients}
          ingredient={ingredient}
        />
      ))}
    </article>
  );
};

export default IngredientList;
