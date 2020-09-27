import React from "react";
import EditIngredientForm from "./EditIngredientForm";

const Ingredient = (props) => {
  return (
    <tbody>
      <tr>
        <th scope="row">{props.ingredient.name}</th>
        <td>{props.ingredient.ingredient_category.name}</td>
        <td>
          {props.ingredient.purchase_quantity}{" "}
          {props.ingredient.measurement_type.name}
        </td>
        <td>${props.ingredient.purchase_price}</td>
        <td>
          <EditIngredientForm
            key={`edit-ing--${props.idx}`}
            ingredientCategory={props.ingredient.ingredient_category}
            ingredientCategoryId={
              props.ingredient.ingredient_category_id
            }
            measurementType={props.ingredient.measurement_type}
            measurementTypeId={props.ingredient.measurement_type_id}
            getIngredients={props.getIngredients}
            ingredient={props.ingredient}
          />
        </td>
      </tr>
    </tbody>

    // <section className="ingredient">
    //   <div className="ingredient-name">{props.ingredient.name}</div>
    //   <div className="ingredient-category">
    //     {props.ingredient.ingredient_category.name}
    //   </div>
    //   <div className="purchase-quantity">
    //     {props.ingredient.purchase_quantity}{" "}
    //     {props.ingredient.measurement_type.name}
    //   </div>
    //   <div className="purchase-price">
    //     ${props.ingredient.purchase_price}
    //   </div>
    // </section>
  );
};

export default Ingredient;
