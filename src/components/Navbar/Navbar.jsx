import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <NavLink to="/main">Main</NavLink>
      </div>
      <div>
        <NavLink to="/past">Past</NavLink>
      </div>
      <div>
        <NavLink to="/future">Future</NavLink>
      </div>
      <div>
        <NavLink to="/roadmap">Roadmap</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
