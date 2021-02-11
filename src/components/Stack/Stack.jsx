import React from "react";
import style from "./Stack.module.css";

const Stack = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.line}></div>
        <img
          src="https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png"
          alt=""
          className={style.img}
        />
      </div>
      <div className={style.content}>
        <h1>Stack of Technologies I know for today</h1>
        <p className={style.p}></p>
      </div>
    </div>
  );
};

export default Stack;
