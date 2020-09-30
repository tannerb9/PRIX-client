import { Route, withRouter } from "react-router-dom";
import React from "react";
import Register from "./auth/Register";
import Login from "./auth/Login";
import IngredientList from "./ingredients/IngredientList";
import RecipeList from "./recipes/RecipeList";
import EmployeeList from "./employees/EmployeeList";
import RecipeView from "./recipes/RecipeView";
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
        path="/recipe/:recipeId(\d+)"
        render={(props) => {
          return <RecipeView {...props} />;
        }}
      />
      <Route
        path="/employees"
        render={(props) => {
          return <EmployeeList {...props} />;
        }}
      />
    </>
  );
};

export default withRouter(AppViews);
