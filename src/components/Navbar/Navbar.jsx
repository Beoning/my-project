import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink to="/main" activeClassName={styles.active}>
          Main
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/past" activeClassName={styles.active}>
          Past
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/future" activeClassName={styles.active}>
          Future
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/roadmap" activeClassName={styles.active}>
          Roadmap
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
