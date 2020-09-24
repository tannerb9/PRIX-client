import { Route, withRouter } from "react-router-dom";
import React from "react";
import Register from "./auth/Register";
import Login from "./auth/Login";
import AddIngredientForm from "./ingredients/AddIngredientForm";
import IngredientList from "./ingredients/IngredientList";
import RecipeList from "./recipes/RecipeList";
import AddEmployeeForm from "./employees/AddEmployeeForm";
import EmployeeList from "./employees/EmployeeList";
// import DataManager from "../api/DataManager";

const AppViews = (props) => {
  // const [measurementTypes, setMeasurementTypes] = useState([]);

  // useEffect(() => {
  //   DataManager.getAll("measurementtype").then(
  //     (allMeasurementTypes) => {
  //       setMeasurementTypes(allMeasurementTypes);
  //     }
  //   );
  // }, [currentUser.company.id]);

  return (
    <>
      <Route
        path="/register"
        render={(props) => {
          return <Register {...props} />;
        }}
      />
      <Route
        path="/login"
        render={(props) => {
          return <Login {...props} />;
        }}
      />
      <Route
        path="/ingredients"
        render={(props) => {
          return (
            <>
              <AddIngredientForm {...props} />
              <IngredientList {...props} />
            </>
          );
        }}
      />
      <Route
        path="/recipes"
        render={(props) => {
          return <RecipeList {...props} />;
        }}
      />
      <Route
        path="/employees"
        render={(props) => {
          return (
            <>
              <AddEmployeeForm {...props} />
              <EmployeeList {...props} />
            </>
          );
        }}
      />
    </>
  );
};

export default withRouter(AppViews);
