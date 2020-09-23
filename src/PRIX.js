import React, { useState } from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/nav/NavBar";
import AppViews from "./components/AppViews";
import "./PRIX.css";

function PRIX() {
  // const isAuthenticated = () =>
  //   localStorage.getItem("PRIX_token") !== null;
  // const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());

  // const [isCurrentUser, setIsCurrentUser] = useState(false);

  // const setUser = (user) => {
  //   localStorage.getItem("PRIX_token");
  // };

  // const logout = () => {
  //   localStorage.removeItem("PRIX_token");
  //   setIsLoggedIn(isAuthenticated());
  // };

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {/* <Route
        render={(props) => (
          <NavBar {...props} isLoggedIn={isLoggedIn} logout={logout} />
        )}
      /> */}
      <Route
        render={(props) => (
          <NavBar
            {...props}
            // isLoggedIn={isLoggedIn}
            // setIsLoggedIn={setIsLoggedIn}
          />
        )}
      />
      <AppViews />
    </>
  );
}

export default PRIX;
