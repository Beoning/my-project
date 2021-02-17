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
          <p className={style.text}>HTML5:</p>
          <span className={style.span}>
            Basics | HTML5 tags | Semantic | Form & validations | Accessibility|
            SEO Basics | Conventions and Best Practices
          </span>
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
          <p className={style.text}>CSS3:</p>
          <span className={style.span}>
            Basics | Making Layouts (Float | Positioning | Display | Box model |
            Grid | Flex) | Responsive Design and Media Queries
          </span>
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
          <p className={style.text}>JS:</p>
          <span className={style.span}>
            Syntax and Basic Constructs | DOM | Fetch API / AJAX | ES6+ |
            Hoisting | Event Bubbling | Scope | Strict | Shadow DOM
          </span>
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
          <p className={style.text}>GIT:</p>
          <span className={style.span}>
            GitHub | Push | Pull | Branch | Init | Add | Commit | Status |
            Config | Branch | Checkout | Merge
          </span>
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
          <p className={style.text}>React:</p>
          <span className={style.span}>
            CRA | JSX | Function vs Class | Props vs State | Life Cycle | HOC |
            Context | Hooks (useState, useEffect. useMemo, useRef)
          </span>
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
          <p className={style.text}>Redux:</p>
          <span className={style.span}>
            CreateStore | State | GetState | Subscriber | Reducers | Action |
            ActionCreator | Dispatch | ApplyMiddleware | CombineReducers
          </span>
        </div>
      </div>
      <div className={style.description}>
        <div className={style.wrapper}>
          <div className={style.line}></div>
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/react-2-458175.png"
            alt=""
            className={style.img}
          />
        </div>
        <div className={style.textWrap}>
          <p className={style.text}>React Ecosystem:</p>
          <span className={style.span}>
            React Router Dom | React-Redux | Redux Form | Redux Thunk | Axios |
            Reselect | Jest
          </span>
        </div>
      </div>
      <div className={style.hLine}></div>
    </div>
  );
};

export default Stack;
