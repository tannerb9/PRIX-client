import React, { useEffect, useState } from "react";
import Ingredient from "./Ingredient";
import EditIngredientForm from "./EditIngredientForm";
import AddIngredientForm from "./AddIngredientForm";
import DataManager from "../../api/DataManager";

const IngredientList = (props) => {
  const [ingredients, setIngredients] = useState([]);

  const getIngredients = () => {
    DataManager.getAll("ingredient").then((companyIngredients) => {
      setIngredients(companyIngredients);
    });
  };

  useEffect(getIngredients, []);

  return (
    <article className="ingredientList">
      <AddIngredientForm {...props} getIngredients={getIngredients} />
      {ingredients.map((ingredient, idx) => (
        <>
          <Ingredient
            key={`ingredient--${idx}`}
            ingredient={ingredient}
          />
          <EditIngredientForm
            {...props}
            ingredientCategory={ingredient.ingredient_category}
            ingredientCategoryId={ingredient.ingredient_category_id}
            measurementType={ingredient.measurement_type}
            measurementTypeId={ingredient.measurement_type_id}
            getIngredients={getIngredients}
            key={`edit-ing--${idx}`}
            ingredient={ingredient}
          />
        </>
      ))}
    </article>
  );
};

export default IngredientList;
