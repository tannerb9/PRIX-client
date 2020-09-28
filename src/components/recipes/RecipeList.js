import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import AddRecipeForm from "./AddRecipeForm";
import DataManager from "../../api/DataManager";
import { Table } from "reactstrap";

const RecipeList = (props) => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = () => {
    DataManager.getAll("recipe").then((companyRecipes) =>
      setRecipes(companyRecipes)
    );
  };

  useEffect(getRecipes, []);

  return (
    <article className="recipeList">
      <AddRecipeForm
        className="add-btn"
        {...props}
        getRecipes={getRecipes}
      />
      <Table hover bordered size="sm">
        <thead>
          <tr>
            <th>Recipe</th>
            <th>Category</th>
            <th>Servings Per Batch</th>
            <th>Serving / Batch Sale Price</th>
            <th></th>
          </tr>
        </thead>
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </Table>
    </article>
  );
};

export default RecipeList;
