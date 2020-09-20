import React from "react";

const Ingredient = (props) => {
  return (
    <>
      <section className="ingredient">
        <div className="ingredient-name">{props.ingredient.name}</div>
        <div className="ingredient-category">
          {props.ingredient.ingredient_category.name}
        </div>
        <div className="purchase-quantity">
          {props.ingredient.purchase_quantity}{" "}
          {props.ingredient.measurement_type.name}
        </div>
        <div className="purchase-price">
          ${props.ingredient.purchase_price}
        </div>
      </section>
    </>
  );
};

export default Ingredient;
