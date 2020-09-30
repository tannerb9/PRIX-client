// import React, { useEffect, useState } from "react";
// import { Modal } from "reactstrap";
// import DataManager from "../../api/DataManager";

// const AddRecipeForm = (props) => {
//   const [modal, setModal] = useState(false);
//   const [recipeCategories, setRecipeCategories] = useState([]);
//   const [ingredientCategories, setIngredientCategories] = useState([])
//   const [measurementTypes, setMeasurementTypes] = useState([]);
//   const [recipeIngredients, setRecipeIngredients] = useState([]);
//   const recipeName = useRef();
//   const servingsPerBatch = useRef();
//   const batchSalePrice = useRef();
//   const servingSalePrice = useRef();

//   const quantity = useRef()
//   const ingredient = useRef()
//   const measurementType = useRef()
//   const recipeCategory = useRef()

//   const newRecipe = {
//     name: recipeName.current.value,
//     servings_per_batch: servingsPerBatch.current.value,
//     batch_sale_price: batchSalePrice.current.value,
//     serving_sale_price: servingSalePrice.current.value,
//     recipe_category_id: recipeCategory.current.value,
//   };

//   const newRecipeIngredient = {
//     quantity:
//     ingredient_id:
//     measurement_type_id:
//     recipe_id:
//   }

//   DataManager.post("recipe", newRecipe).then(() => {
//     props.history.push({pathname: `/recipes/${}`})
//   })

//   const toggle = () => {
//     setModal(!modal)
//   }
//   const recipeIngredients = {};

//   useEffect(() => {
//     DataManager.getAll("measurementtype").then((allTypes) => {
//       setMeasurementTypes(allTypes);
//     });
//   }, []);

//   useEffect(() => {
//     DataManager.getAll("recipecategory").then((all) => {
//       setRecipeCategories(all);
//     });
//   }, []);

//   useEffect(() => {
//     DataManager.getAll("ingredientcategory").then((allCategories) => {
//       setIngredientCategories(allCategories);
//     });
//   }, []);
// };
