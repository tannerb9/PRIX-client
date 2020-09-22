import React, { useRef, useState } from "react";

const AddEmployee = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const ingredientName = useRef();
  const ingredientCategory = useRef();
  const measurementType = useRef();
  const purchaseQuantity = useRef();
  const purchasePrice = useRef();

  const handleAddEmployee = (e) => {
    e.preventDefault();
  };

  const toggleModal = () => {};

  return (
    <>
      <button onClick={toggleModal}>Add Employee</button>
      <dialog id="">
        <form id="add-employee-form" onSubmit={handleAddEmployee}>
          <label for="ingredient-name">Name: </label>
          <input id="ingredient-name">{ingredientName}</input>
          <label for="ingredient-category">Ingredient Category: </label>
          <select id="ingredient-category">
            <option value={}></option>
          </select>
          <label for="measurement-type">Measurement Type: </label>
          <select id="measurement-type">
            <option value={}></option>
          </select>
          <label for="purchase-quantity">Quantity: </label>
          <input id="purchase-quantity">{purchaseQuantity}</input>
          <label for="purchase-price">Price: </label>
          <input id="purchase-price">{purchasePrice}</input>
        </form>
      </dialog>
    </>
  );
};
