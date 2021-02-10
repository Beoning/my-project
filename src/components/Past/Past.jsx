import React from "react";
import style from "./Past.module.css";

const Past = () => {
  return (
    <>
      <div className={style.line}></div>
      <img
        src="https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png"
        alt=""
        className={style.img}
      />
      <div className={style.content}>
        <h1>What i know for today</h1>
        <p className={style.p}></p>
      </div>
    </>
  );
};

export default Past;
