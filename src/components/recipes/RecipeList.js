import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import DataManager from "../../api/DataManager";

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
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </article>
  );
};

export default RecipeList;
