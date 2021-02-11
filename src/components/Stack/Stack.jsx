import React from "react";
import style from "./Stack.module.css";

const Stack = () => {
  return (
    <>
      <div className={style.line}></div>
      <img
        src="https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png"
        alt=""
        className={style.img}
      />
      <div className={style.content}>
        <h1>Stack of technologies I know for today</h1>
        <p className={style.p}></p>
      </div>
    </>
  );
};

export default Stack;
