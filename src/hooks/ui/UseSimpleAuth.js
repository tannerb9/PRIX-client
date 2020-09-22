import { useEffect, useState } from "react";

const useSimpleAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {}, [isLoggedIn]);

  const isAuthenticated = () =>
    isLoggedIn || localStorage.getItem("PRIX_token") !== null;

  const register = (userInfo) => {
    return fetch("http://localhost:8000/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((res) => {
        if ("token" in res) {
          localStorage.setItem("PRIX_token", res.token);
          setIsLoggedIn(true);
        }
      });
  };

  const login = (credentials) => {
    return fetch("http://localhost:8000/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((res) => res.json())
      .then((res) => {
        if ("valid" in res && res.valid && "token" in res) {
          localStorage.setItem("PRIX_token", res.token);
          console.log("before", isLoggedIn);
          setIsLoggedIn(true);
          console.log("after", isLoggedIn);
        }
      });
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("PRIX_token");
  };

  return { isAuthenticated, logout, login, register, isLoggedIn };
};

export default useSimpleAuth;
