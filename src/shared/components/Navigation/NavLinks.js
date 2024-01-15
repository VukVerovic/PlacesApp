import React from "react";
import "./NavLinks.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/auth-context";
import { useContext } from "react";
import Button from "../FormElements/Button";

const NavLinks = (props) => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/users">ALL USERS</NavLink>
      </li>
      <li>{auth.isLoggedIn && <NavLink to="/u5/places">MY PLACES</NavLink>}</li>
      <li>
        {auth.isLoggedIn && <NavLink to="/places/new">ADD PLACE</NavLink>}
      </li>
      <li>{!auth.isLoggedIn && <NavLink to="/auth">AUTHENTICATE</NavLink>}</li>
      <li>
        {auth.isLoggedIn && <Button onClick={auth.logout}>LOG OUT</Button>}
      </li>
    </ul>
  );
};
export default NavLinks;
