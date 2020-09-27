import React from "react";
import useSimpleAuth from "../../hooks/ui/UseSimpleAuth";
import { Nav, NavItem, NavLink, Button } from "reactstrap";
import "./NavBar.css";

const NavBar = (props) => {
  const { isAuthenticated, logout } = useSimpleAuth();

  return (
    <Nav className="main-nav" tabs>
      <h2 className="brand">PRIX</h2>
      {isAuthenticated() ? (
        <>
          <NavItem>
            <NavLink className="navs-link" href="/ingredients">
              Ingredients
            </NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink className="navs-link" href="/recipes">
              Recipes
            </NavLink>
          </NavItem> */}
          <NavItem>
            <NavLink className="navs-link" href="/employees">
              Employees
            </NavLink>
          </NavItem>
          <NavItem>
            <Button
              className="navs-link fakeLink"
              onClick={() => {
                logout();
                props.history.push({
                  pathname: "/login",
                });
              }}
            >
              Logout
            </Button>
          </NavItem>
        </>
      ) : (
        <>
          <NavItem>
            <NavLink className="navs-link" href="/login">
              Login
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navs-link" href="/register">
              Register
            </NavLink>
          </NavItem>
        </>
      )}
    </Nav>
  );
};

export default NavBar;
