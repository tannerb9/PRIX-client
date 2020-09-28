import React, { useEffect, useRef, useState } from "react";
import DataManager from "../../api/DataManager";
import {
  Button,
  Form,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

const EditIngredientForm = (props) => {
  const [modal, setModal] = useState(false);
  const [measurementTypes, setMeasurementTypes] = useState([]);
  const [ingredientCategories, setIngredientCategories] = useState([]);
  const measurementType = useRef();
  const ingredientCategory = useRef();
  const ingredientName = useRef();
  const purchaseQuantity = useRef();
  const purchasePrice = useRef();

  const handleEditIngredient = (e) => {
    e.preventDefault();

    let measurement = measurementType.current.value;
    let category = ingredientCategory.current.value;

    if (measurementType.current.value === props.measurementType.name) {
      measurement = parseInt(props.measurementTypeId);
    }

    if (
      ingredientCategory.current.value === props.ingredientCategory.name
    ) {
      category = parseInt(props.ingredientCategoryId);
    }

    const editedIngredient = {
      name: ingredientName.current.value,
      purchase_price: purchasePrice.current.value,
      purchase_quantity: purchaseQuantity.current.value,
      measurement_type_id: measurement,
      ingredient_category_id: category,
    };

    DataManager.put(
      "ingredient",
      props.ingredient.id,
      editedIngredient
    ).then(() => {
      props.getIngredients();
      toggle();
    });
  };

  const handleDeleteIngredient = () => {
    DataManager.delete("ingredient", props.ingredient.id).then(() => {
      props.getIngredients();
      toggle();
    });
  };

  const toggle = () => {
    setModal(!modal);
  };

  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

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
      <Button className="edit-btn" onClick={toggle}>
        Edit Ingredient
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          {props.ingredient.name}
        </ModalHeader>
        <ModalBody>
          <Form
            onSubmit={handleEditIngredient}
            id="edit-ingredient-form"
          >
            <fieldset>
              <label htmlFor="ingredient-name">Name </label>
              <input
                id="ingredient-name"
                ref={ingredientName}
                defaultValue={props.ingredient.name}
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
                <option
                  value={props.ingredientCategoryId}
                  key={props.ingredientCategoryId}
                >
                  {props.ingredientCategory.name}
                </option>
                {ingredientCategories.map((category, idx) => (
                  <>
                    {props.ingredientCategory.name !== category.name ? (
                      <option value={category.id} key={category.id}>
                        {category.name}
                      </option>
                    ) : null}
                  </>
                ))}
              </select>
            </fieldset>
            <fieldset>
              <label htmlFor="measurement-type">
                Measurement Type{" "}
              </label>
              <select id="measurement-type" ref={measurementType}>
                <option
                  value={props.measurementType.id}
                  key={`measurement--${props.measurementType.id}`}
                >
                  {props.measurementType.name}
                </option>
                {measurementTypes.map((type, idx) => (
                  <>
                    {props.measurementType.name !== type.name ? (
                      <option
                        value={type.id}
                        key={`measurement--${idx}`}
                      >
                        {type.name}
                      </option>
                    ) : null}
                  </>
                ))}
              </select>
            </fieldset>
            <fieldset>
              <label htmlFor="purchase-quantity">
                Purchase Quantity{" "}
              </label>
              <input
                id="purchase-quantity"
                ref={purchaseQuantity}
                defaultValue={props.ingredient.purchase_quantity}
                type="number"
                min="0"
                className="form-control"
                required
              />
            </fieldset>
            <fieldset>
              <label htmlFor="purchase-price">Purchase Price </label>
              <input
                id="purchase-price"
                ref={purchasePrice}
                defaultValue={props.ingredient.purchase_price}
                type="number"
                step="0.01"
                min="0"
                className="form-control"
                required
              />
            </fieldset>
            <Button type="submit">Submit</Button>
            <Button onClick={handleDeleteIngredient}>Delete</Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default EditIngredientForm;
