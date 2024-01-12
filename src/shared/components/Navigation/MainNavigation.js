import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

// import MainHeader from "./MainHeader";
import "./MainNavigation.css";
import SideDrawer from "./SideDrawer";

const MainNavigation = (props) => {
  return (
    <React.Fragment>
      {/* <SideDrawer className="main-navigation__drawer-nav">
        <NavLinks />
      </SideDrawer> */}
      <header className="main-header">
        <button className="main-navigation__menu-btn"></button>
        <h1 className="main-navigation__title">
          <Link to="/"> Your places </Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </header>
    </React.Fragment>
  );
};

export default MainNavigation;
