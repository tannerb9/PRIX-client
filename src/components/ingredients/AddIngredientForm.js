import React, { useEffect, useRef, useState } from "react";
import DataManager from "../../api/DataManager";

const AddIngredientForm = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [measurementTypes, setMeasurementTypes] = useState([]);
  const [ingredientCategories, setIngredientCategories] = useState([]);
  const measurementType = useRef();
  const ingredientCategory = useRef();
  const ingredientName = useRef();
  const purchaseQuantity = useRef();
  const purchasePrice = useRef();

  const handleAddEmployee = (e) => {
    e.preventDefault();

    const newIngredient = {
      name: ingredientName.current.value,
      purchase_price: purchasePrice.current.value,
      purchase_quantity: purchaseQuantity.current.value,
      measurement_type_id: measurementType.current.value,
      ingredient_category_id: ingredientCategory.current.value,
    };

    DataManager.post("ingredient", newIngredient).then(() => {
      props.history.push({ pathname: "/ingredients" });
    });
  };

  const toggleModal = () => {};

  useEffect(() => {
    DataManager.getAll("measurementtype").then((allTypes) => {
      setMeasurementTypes(allTypes);
    });
  }, []);

  useEffect(() => {
    DataManager.getAll("ingredientcategory").then((allCategories) => {
      setIngredientCategories(allCategories);
    });
  }, []);

  return (
    <>
      {/* <button onClick={toggleModal}>Add Employee</button> */}
      {/* <dialog id=""> */}
      <form id="add-employee-form" onSubmit={handleAddEmployee}>
        <fieldset>
          <label htmlFor="ingredient-name">Name </label>
          <input
            id="ingredient-name"
            ref={ingredientName}
            type="text"
            className="form-control"
            required
            autoFocus
          />
        </fieldset>
        <fieldset>
          <label htmlFor="ingredient-category">
            Ingredient Category{" "}
          </label>
          <select id="ingredient-category" ref={ingredientCategory}>
            {/* <option disabled hidden defaultValue></option> */}
            {ingredientCategories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </fieldset>
        <fieldset>
          <label htmlFor="measurement-type">Measurement Type </label>
          <select id="measurement-type" ref={measurementType}>
            {measurementTypes.map((type) => (
              <option value={type.id} key={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </fieldset>
        <fieldset>
          <label htmlFor="purchase-quantity">Quantity </label>
          <input
            id="purchase-quantity"
            ref={purchaseQuantity}
            type="number"
            min="0"
            className="form-control"
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="purchase-price">Price </label>
          <input
            id="purchase-price"
            ref={purchasePrice}
            type="number"
            step="0.01"
            min="0"
            className="form-control"
            required
          />
        </fieldset>
        <fieldset>
          <button onClick={handleAddEmployee}>Submit</button>
        </fieldset>
      </form>
      {/* </dialog> */}
    </>
  );
};

export default AddIngredientForm;
