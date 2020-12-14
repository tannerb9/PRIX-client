import React, { useEffect, useState } from "react";
import DataManager from "../../api/DataManager";
import { Table } from "reactstrap";

const RecipeView = (props) => {
  const [recipe, setRecipe] = useState({});
  const [recipeIngredients, setRecipeIngredients] = useState([]);

  const getRecipe = () => {
    DataManager.get(
      "recipe",
      props.match.params.recipeId
    ).then((recipe) => setRecipe(recipe));
  };

  const getRecipeIngredients = () => {
    DataManager.getAllByCategory(
      "recipeingredient",
      "recipe",
      props.match.params.recipeId
    ).then((recipeIngredients) =>
      setRecipeIngredients(recipeIngredients)
    );
  };

  useEffect(getRecipe, []);
  useEffect(getRecipeIngredients, []);

  return (
    <>
      <h2>{recipe.name}</h2>
      <Table hover bordered size="sm">
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Quantity</th>
            <th>Measurement</th>
            <th>Cost</th>
          </tr>
        </thead>
        {recipeIngredients.map((ingredient) => (
          <tbody key={ingredient.id}>
            <tr>
              <th scope="row">{ingredient.ingredient.name}</th>
              <td>{ingredient.quantity}</td>
              <td>{ingredient.measurement_type.name}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </>
  );
};

export default RecipeView;
