import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.menu}>
        <li className={style.menuItem}>
          <NavLink to="/about" className={style.a}>
            ABOUT
          </NavLink>
        </li>
        <li className={style.menuItem}>
          <NavLink to="/stack" className={style.a}>
            STACK
          </NavLink>
        </li>
        <li className={style.menuItem}>
          <NavLink to="/future" className={style.a}>
            FUTURE
          </NavLink>
        </li>
        <li className={style.menuItem}>
          <NavLink to="/roadmap" className={style.a}>
            ROADMAP
          </NavLink>
        </li>
      </ul>
      <div className={style.contacts}>
        <button className={style.btn}>
          <p className={style.text}>@Beoning</p>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
