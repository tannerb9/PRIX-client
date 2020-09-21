import React from "react";

const Recipe = (props) => {
  return (
    <section className="recipe">
      <div className="recipe-name">{props.recipe.name}</div>
      <div className="recipe-category">
        {props.recipe.recipe_category.name}
      </div>
      <div className="recipe-servings">
        {props.recipe.servings_per_batch}
      </div>
      <div className="recipe-sale-prices">
        ${props.recipe.serving_sale_price} | $
        {props.recipe.batch_sale_price}
      </div>
    </section>
  );
};

export default Recipe;
