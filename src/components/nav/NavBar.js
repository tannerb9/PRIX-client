import React from "react";
import { Link } from "react-router-dom";
import useSimpleAuth from "../../hooks/ui/UseSimpleAuth";

const NavBar = (props) => {
  const { isAuthenticated, logout } = useSimpleAuth();

  return (
    <nav>
      <ul>
        <li className="nav-item">
          <Link className="nav-link" to="/ingredients">
            Ingredients
          </Link>
        </li>
        <li className="nav-link">
          <Link className="nav-link" to="/recipes">
            Recipes
          </Link>
        </li>
        <li className="nav-link">
          <Link className="nav-link" to="/employees">
            Employees
          </Link>
        </li>
        {isAuthenticated() ? (
          <li className="nav-item">
            <button
              className="nav-link fakeLink"
              onClick={() => {
                logout();
                props.history.push({
                  pathname: "/login",
                });
              }}
            >
              Logout
            </button>
          </li>
        ) : (
          <>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
