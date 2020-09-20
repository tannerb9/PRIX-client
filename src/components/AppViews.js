import { Route, withRouter } from "react-router-dom";
import React from "react";
import Register from "./auth/Register";
import Login from "./auth/Login";

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
    </>
  );
};

export default withRouter(AppViews);
