import React, { useEffect, useState } from "react";
import Ingredient from "./Ingredient";
import useSimpleAuth from "../../hooks/ui/UseSimpleAuth";

const IngredientList = (props) => {
  const [ingredients, setIngredients] = useState([]);
  const { isAuthenticated } = useSimpleAuth();

  const getIngredients = () => {
    if (isAuthenticated()) {
      fetch(
        `http://localhost:8000/ingredient?company=${props.companyId}`,
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
        .then((allIngredients) => {
          setIngredients(allIngredients);
        });
    }
  };

  useEffect(getIngredients, []);

  return (
    <article className="ingredientList">
      {ingredients.map((ingredient) => (
        <Ingredient key={ingredient.id} ingredient={ingredient} />
      ))}
    </article>
  );
};

export default IngredientList;
