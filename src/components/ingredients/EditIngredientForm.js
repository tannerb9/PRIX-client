import React, { useEffect, useRef, useState } from "react";
import DataManager from "../../api/DataManager";
import { Button, Form, Modal, ModalBody } from "reactstrap";

const EditIngredientForm = (props) => {
  const [modal, setModal] = useState(false);
  const [measurementTypes, setMeasurementTypes] = useState([]);
  const [ingredientCategories, setIngredientCategories] = useState([]);
  const [ingredient, setIngredient] = useState({
    name: "",
    purchase_quantity: 0,
    purchase_price: 0,
    ingredient_category: 0,
    measurement_type: 0,
  });
  const measurementType = useRef();
  const ingredientCategory = useRef();
  const ingredientName = useRef();
  const purchaseQuantity = useRef();
  const purchasePrice = useRef();

  function handleFieldChange(evt, obj, func) {
    const stateToChange = { ...obj };
    stateToChange[evt.target.id] = evt.target.value;
    func(stateToChange);
  }

  const handleEditIngredient = (e) => {
    e.preventDefault();

    const editedIngredient = {
      name: ingredientName.current.value,
      purchase_price: purchasePrice.current.value,
      purchase_quantity: purchaseQuantity.current.value,
      measurement_type_id: measurementType.current.value,
      ingredient_category_id: ingredientCategory.current.value,
    };

    console.log(editedIngredient);

    DataManager.put(
      "ingredient",
      props.ingredient.id,
      editedIngredient
    ).then(() => {
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

  useEffect(() => {
    DataManager.get("ingredient", props.ingredient.id).then(
      (ingredient) => {
        setIngredient(ingredient);
      }
    );
  }, [props.ingredient.id]);

  return (
    <>
      <Button onClick={toggle}>Edit Ingredient</Button>
      <Modal isOpen={modal} toggle={toggle}>
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
                defaultValue={ingredient.name}
                onChange={(evt) =>
                  handleFieldChange(evt, ingredient, setIngredient)
                }
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
                  <option
                    value={category.id}
                    key={`ing-category--${category.id}`}
                  >
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
                  <option
                    value={type.id}
                    key={`measurement--${type.id}`}
                  >
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
                defaultValue={ingredient.purchase_quantity}
                onChange={(evt) =>
                  handleFieldChange(evt, ingredient, setIngredient)
                }
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
                defaultValue={ingredient.purchase_price}
                onChange={(evt) =>
                  handleFieldChange(evt, ingredient, setIngredient)
                }
                type="number"
                step="0.01"
                min="0"
                className="form-control"
                required
              />
            </fieldset>
            <Button type="submit">Submit</Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default EditIngredientForm;
