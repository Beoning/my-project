import React from "react";
import style from "./Overlay.module.css";

const Overlay = () => {
  return (
    <div className={style.overlay}>
      <div className={style.desc}>
        <p>
          I read professional literature, learn English and do sports <br />I
          love cookies!
          <br /> Social:
        </p>
      </div>
      <div className={style.icons}>
        <a href="https://vk.com/beoning">
          <img
            src="https://anton-sn.web.app/static/media/vk.82f823e0.svg"
            alt=""
          />
        </a>
        <a href="https://github.com/Beoning">
          <img
            src="https://image.flaticon.com/icons/png/512/25/25231.png"
            alt=""
          />
        </a>
        <a href="https://www.instagram.com/beoningg/?hl=ru">
          <img
            src="https://image.flaticon.com/icons/png/512/174/174855.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Overlay;
