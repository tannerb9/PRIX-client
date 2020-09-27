import React, { useEffect, useState } from "react";
import Ingredient from "./Ingredient";
import AddIngredientForm from "./AddIngredientForm";
import DataManager from "../../api/DataManager";
import { Table } from "reactstrap";

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
      <Table hover bordered size="sm">
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Purchase Quantity</th>
            <th>Purchase Price</th>
            <th></th>
          </tr>
        </thead>
        {ingredients.map((ingredient, idx) => (
          <Ingredient
            key={`ingredient--${idx}`}
            idx={idx}
            ingredient={ingredient}
            ingredientCategory={ingredient.ingredient_category}
            ingredientCategoryId={ingredient.ingredient_category_id}
            measurementType={ingredient.measurement_type}
            measurementTypeId={ingredient.measurement_type_id}
            getIngredients={getIngredients}
          />
        ))}
      </Table>
    </article>
  );
};

export default IngredientList;
