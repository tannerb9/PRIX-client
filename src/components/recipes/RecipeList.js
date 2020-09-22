import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import DataManager from "../../api/DataManager";

const RecipeList = (props) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    //NEEDED?
    //    if (props.currentUser.company.id !== 0) {
    DataManager.getAll(
      "recipe",
      props.currentUser.company.id
    ).then((companyRecipes) => setRecipes(companyRecipes));
  }, [props.currentUser]);

  return (
    <article className="recipeList">
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </article>
  );
};

export default RecipeList;
