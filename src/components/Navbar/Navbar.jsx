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
        <div className={style.overlay}>
          <a href="https://vk.com/beoning" className={style.iconHref}>
            <img
              src="https://cdn0.iconfinder.com/data/icons/social-network-9/50/11-512.png"
              alt=""
              className={style.icon}
            />
          </a>
          <a href="https://github.com/Beoning" className={style.iconHref}>
            <img
              src="https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg"
              alt=""
              className={style.icon}
            />
          </a>
          <a
            href="https://www.instagram.com/beoningg/?hl=ru"
            className={style.iconHref}
          >
            <img
              src="https://image.flaticon.com/icons/png/512/174/174855.png"
              alt=""
              className={style.icon}
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
