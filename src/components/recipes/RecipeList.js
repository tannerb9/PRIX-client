import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";

const RecipeList = (props) => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = () => {
    if (props.currentUser.company.id !== 0) {
      fetch(
        `http://localhost:8000/recipe?company=${props.currentUser.company.id}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Token ${localStorage.getItem(
              "PRIX_token"
            )}`,
          },
        }
      )
        .then((response) => response.json())
        .then((companyRecipes) => {
          setRecipes(companyRecipes);
        });
    }
  };

  useEffect(getRecipes, [props.currentUser]);

  return (
    <article className="recipeList">
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </article>
  );
};

export default RecipeList;
