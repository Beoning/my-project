import React from "react";
import style from "./Overlay.module.css";

const Overlay = () => {
  return (
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
  );
};

export default Overlay;
