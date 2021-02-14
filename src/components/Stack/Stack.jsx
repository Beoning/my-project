import React from "react";
import style from "./Stack.module.css";

const Stack = () => {
  return (
    <div className={style.main}>
      <div className={style.content}>
        <h1>Stack of Technologies I know for today</h1>
      </div>
      <div className={style.hLine}></div>
      <div className={style.description}>
        <div className={style.wrapper}>
          <div className={style.line}></div>
          <img
            src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
            alt=""
            className={style.img}
          />
        </div>
        <div className={style.textWrap}>
          <p className={style.text}>
            React library: <br />
          </p>
        </div>
      </div>
      <div className={style.description}>
        <div className={style.wrapper}>
          <div className={style.line}></div>
          <img
            src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png"
            alt=""
            className={style.img}
          />
        </div>
        <div className={style.textWrap}>
          <p className={style.text}>
            React library: <br />
          </p>
        </div>
      </div>
      <div className={style.description}>
        <div className={style.wrapper}>
          <div className={style.line}></div>
          <img
            src="https://sujanbyanjankar.com.np/wp-content/uploads/2019/09/javascript.png"
            alt=""
            className={style.img}
          />
        </div>
        <div className={style.textWrap}>
          <p className={style.text}>
            React library: <br />
          </p>
        </div>
      </div>
      <div className={style.description}>
        <div className={style.wrapper}>
          <div className={style.line}></div>
          <img
            src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
            alt=""
            className={style.img}
          />
        </div>
        <div className={style.textWrap}>
          <p className={style.text}>
            React library: <br />
          </p>
        </div>
      </div>
      <div className={style.description}>
        <div className={style.wrapper}>
          <div className={style.line}></div>
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png"
            alt=""
            className={style.img}
          />
        </div>
        <div className={style.textWrap}>
          <p className={style.text}>
            React library: <br />
          </p>
        </div>
      </div>
      <div className={style.description}>
        <div className={style.wrapper}>
          <div className={style.line}></div>
          <img
            src="https://redux.js.org/img/redux.svg"
            alt=""
            className={style.img}
          />
        </div>
        <div className={style.textWrap}>
          <p className={style.text}>
            React library: <br />
          </p>
        </div>
      </div>
      <div className={style.hLine}></div>
    </div>
  );
};

export default Stack;
