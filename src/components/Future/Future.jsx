import React from "react";
import style from "./Future.module.css";

const Future = () => {
  return (
    <div className={style.main}>
      <div className={style.content}>
        <h1>Technologies I Want To Be Learned</h1>
      </div>
      <div className={style.hLine}></div>
      <div className={style.description}>
        <div className={style.wrapper}>
          <img
            src="https://image.flaticon.com/icons/png/512/919/919832.png"
            alt=""
          />
          <h2>TypeScript</h2>
        </div>
      </div>
      <div className={style.description}>
        <div className={style.wrapper}>
          <img src="https://www.honext.io/static/images/next_logo.png" alt="" />
          <h2>Next JS</h2>
        </div>
      </div>
      <div className={style.description}>
        <div className={style.wrapper}>
          <img
            src="https://miro.medium.com/max/400/1*nP2C50GK4_-ly_R_mq3juQ.png"
            alt=""
          />
          <h2>GraphQL</h2>
        </div>
      </div>
      <div className={style.description}>
        <div className={style.wrapper}>
          <img
            src="https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png"
            alt=""
          />
          <h2>Webpack</h2>
        </div>
      </div>
      <div className={style.description}>
        <div className={style.wrapper}>
          <img src="https://img.icons8.com/color/452/nodejs.png" alt="" />
          <h2>NodeJS</h2>
        </div>
      </div>
      <div className={style.description}>
        <div className={style.wrapper}>
          <img
            src="https://seeklogo.com/images/A/apollo-logo-DC7DD3C444-seeklogo.com.png"
            alt=""
          />
          <h2>Apollo</h2>
        </div>
      </div>
      <div className={style.hLine}></div>
    </div>
  );
};

export default Future;
