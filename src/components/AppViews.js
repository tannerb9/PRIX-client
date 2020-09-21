import { Route, withRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Register from "./auth/Register";
import Login from "./auth/Login";
import IngredientList from "./ingredients/IngredientList";
import useSimpleAuth from "../hooks/ui/UseSimpleAuth";

const AppViews = () => {
  const [currentUser, setCurrentUser] = useState({
    company: { id: 0 },
  });
  const { isAuthenticated } = useSimpleAuth();

  const getCurrentUser = () => {
    if (isAuthenticated()) {
      fetch("http://localhost:8000/employee/loggedInEmployee", {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Token ${localStorage.getItem("PRIX_token")}`,
        },
      })
        .then((response) => response.json())
        .then((user) => {
          setCurrentUser(user);
        });
    }
  };

  useEffect(getCurrentUser, []);
  // useEffect(() => {
  //   getCurrentUser();
  // }, []);

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
    </>
  );
};

export default withRouter(AppViews);
