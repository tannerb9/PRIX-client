import React from "react";
import { Link } from "react-router-dom";
import useSimpleAuth from "../../hooks/ui/UseSimpleAuth";
import { Nav, NavItem, NavLink, Button } from "reactstrap";

const NavBar = (props) => {
  const { isAuthenticated, logout } = useSimpleAuth();

  return (
    <Nav tabs>
      <NavItem>
        <NavLink href="/ingredients">Ingredients</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/recipes">Recipes</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/employees">Employees</NavLink>
      </NavItem>
      {isAuthenticated() ? (
        <NavItem>
          <Button
            className="nav-link fakeLink"
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
      ) : (
        <>
          <NavItem>
            <Link href="/login">Login</Link>
          </NavItem>
          <NavItem>
            <Link href="/register">Register</Link>
          </NavItem>
        </>
      )}
    </Nav>
  );
};

export default NavBar;
