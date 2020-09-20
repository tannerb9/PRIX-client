import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/nav/NavBar";
import AppViews from "./components/AppViews";
import "./PRIX.css";

function PRIX() {
  return (
    <>
      {/* <Route render={(props) => <NavBar {...props} />} /> */}
      <AppViews />
    </>
  );
}

export default PRIX;
