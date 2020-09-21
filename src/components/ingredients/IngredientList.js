import React, { useEffect, useState } from "react";
import Ingredient from "./Ingredient";

const IngredientList = (props) => {
  const [ingredients, setIngredients] = useState([]);

  const getIngredients = () => {
    if (props.currentUser.company.id !== 0) {
      fetch(
        `http://localhost:8000/ingredient?company=${props.currentUser.company.id}`,
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

  useEffect(getIngredients, [props.currentUser]);

  // useEffect(() => {
  //   console.log(props.currentUser);
  //   getIngredients(props.currentUser.company.id);
  // }, []);

  return (
    <article className="ingredientList">
      {ingredients.map((ingredient) => (
        <Ingredient key={ingredient.id} ingredient={ingredient} />
      ))}
    </article>
  );
};

export default IngredientList;
