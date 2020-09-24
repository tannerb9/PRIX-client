import React, { useEffect, useState } from "react";
import Ingredient from "./Ingredient";
import EditIngredientForm from "./EditIngredientForm";
import DataManager from "../../api/DataManager";

const IngredientList = (props) => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    DataManager.getAll("ingredient").then((companyIngredients) => {
      setIngredients(companyIngredients);
    });
  }, []);

  return (
    <article className="ingredientList">
      {ingredients.map((ingredient) => (
        <>
          <Ingredient
            key={`ingredient--${ingredient.id}`}
            ingredient={ingredient}
          />
          <EditIngredientForm
            {...props}
            key={`edit-ing--${ingredient.id}`}
            ingredient={ingredient}
          />
        </>
      ))}
    </article>
  );
};

export default IngredientList;
