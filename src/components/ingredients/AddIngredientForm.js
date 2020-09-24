import React, { useEffect, useRef, useState } from "react";
import DataManager from "../../api/DataManager";
import { Button, Form, Modal, ModalBody } from "reactstrap";

const AddIngredientForm = (props) => {
  const [modal, setModal] = useState(false);
  const [measurementTypes, setMeasurementTypes] = useState([]);
  const [ingredientCategories, setIngredientCategories] = useState([]);
  const measurementType = useRef();
  const ingredientCategory = useRef();
  const ingredientName = useRef();
  const purchaseQuantity = useRef();
  const purchasePrice = useRef();

  const handleAddIngredient = (e) => {
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
      toggle();
    });
  };

  const toggle = () => {
    setModal(!modal);
  };

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
      <Button onClick={toggle}>Add Ingredient</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <Form id="add-ingredient-form">
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
              <label htmlFor="measurement-type">
                Measurement Type{" "}
              </label>
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
              <button onClick={handleAddIngredient}>Submit</button>
            </fieldset>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddIngredientForm;
