import { Route, withRouter } from "react-router-dom";
import React from "react";
import Register from "./auth/Register";
import Login from "./auth/Login";
import IngredientList from "./ingredients/IngredientList";

const AppViews = () => {
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
        path="/ingredients/:companyId(\d+)"
        render={(props) => {
          return (
            <IngredientList
              {...props}
              companyId={props.match.params.companyId}
            />
          );
        }}
      />
    </>
  );
};

export default withRouter(AppViews);
