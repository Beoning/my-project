import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="menu">
        <li className="menuItem">
          <NavLink to="/main" className="a">
            MAIN
          </NavLink>
        </li>
        <li className="menuItem">
          <NavLink to="/past" className="a">
            PAST
          </NavLink>
        </li>
        <li className="menuItem">
          <NavLink to="/future" className="a">
            FUTURE
          </NavLink>
        </li>
        <li className="menuItem">
          <NavLink to="/roadmap" className="a">
            ROADMAP
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
