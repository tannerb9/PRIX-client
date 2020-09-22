import React, { useEffect, useState } from "react";
import Ingredient from "./Ingredient";
import DataManager from "../../api/DataManager";

const IngredientList = (props) => {
  const [ingredients, setIngredients] = useState([]);

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
