import React, { useEffect, useState } from "react";
import Ingredient from "./Ingredient";
import DataManager from "../../api/DataManager";

const IngredientList = (props) => {
  const [ingredients, setIngredients] = useState([]);

  // const getIngredients = () => {
  // if (props.currentUser.company.id !== 0) {
  //     fetch(
  //       `http://localhost:8000/ingredient?company=${props.currentUser.company.id}`,
  //       {
  //         method: "GET",
  //         headers: {
  //           Accept: "application/json",
  //           Authorization: `Token ${localStorage.getItem(
  //             "PRIX_token"
  //           )}`,
  //         },
  //       }
  //     )
  //       .then((response) => response.json())
  //       .then((companyIngredients) => {
  //         setIngredients(companyIngredients);
  //       });
  //   }
  // };

  useEffect(() => {
    // NOT SURE IF THIS IS NEEDED?
    //     if (props.currentUser.company.id !== 0) {

    DataManager.getAll("ingredient", props.currentUser.company.id).then(
      (companyIngredients) => {
        setIngredients(companyIngredients);
      }
    );
  }, [props.currentUser]);

  return (
    <article className="ingredientList">
      {ingredients.map((ingredient) => (
        <Ingredient key={ingredient.id} ingredient={ingredient} />
      ))}
    </article>
  );
};

export default IngredientList;
