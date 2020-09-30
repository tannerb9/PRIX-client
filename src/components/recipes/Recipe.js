import React from "react";

const Recipe = (props) => {
  return (
    <tbody>
      <tr
        onClick={() => {
          props.history.push(`/recipe/${props.recipe.id}`);
        }}
      >
        <th scope="row">{props.recipe.name}</th>
        <td>{props.recipe.recipe_category.name}</td>
        <td>{props.recipe.servings_per_batch}</td>
        <td>
          ${props.recipe.serving_sale_price} | $
          {props.recipe.batch_sale_price}
        </td>
      </tr>
    </tbody>
  );
};

export default Recipe;
