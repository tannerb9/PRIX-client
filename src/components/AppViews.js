import { Route, withRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Register from "./auth/Register";
import Login from "./auth/Login";
import IngredientList from "./ingredients/IngredientList";
import RecipeList from "./recipes/RecipeList";
import EmployeeList from "./employees/EmployeeList";
import useSimpleAuth from "../hooks/ui/UseSimpleAuth";
import DataManager from "../api/DataManager";

const AppViews = () => {
  const [currentUser, setCurrentUser] = useState({
    company: { id: 0 },
  });
  const [measurementTypes, setMeasurementTypes] = useState([]);
  const { isAuthenticated, isLoggedIn } = useSimpleAuth();

  useEffect(() => {
    DataManager.getCurrentUser().then((user) => {
      setCurrentUser(user);
    });
  }, [isLoggedIn]);

  // useEffect(() => {
  //   DataManager.getAll("measurementtype", currentUser.company.id).then(
  //     (allMeasurementTypes) => {
  //       setMeasurementTypes(allMeasurementTypes);
  //     }
  //   );
  // }, [currentUser.company.id]);

  // const getCurrentUser = () => {
  //   if (isAuthenticated()) {
  //     fetch("http://localhost:8000/employee/loggedInEmployee", {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         Authorization: `Token ${localStorage.getItem("PRIX_token")}`,
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((user) => {
  //         setCurrentUser(user);
  //       });
  //   }
  // };

  // useEffect(getCurrentUser, [isLoggedIn]);

  // useEffect(() => {}, [currentUser]);

  // CAUSES INFINITE LOOP
  // useEffect(getCurrentUser, [currentUser]);

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
            <IngredientList {...props} currentUser={currentUser} />
          );
        }}
      />
      <Route
        path="/recipes"
        render={(props) => {
          return <RecipeList {...props} currentUser={currentUser} />;
        }}
      />
      <Route
        path="/employees"
        render={(props) => {
          return <EmployeeList {...props} currentUser={currentUser} />;
        }}
      />
    </>
  );
};

export default withRouter(AppViews);
