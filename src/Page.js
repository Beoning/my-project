import React from "react";
import { Route } from "react-router-dom";
import Future from "./components/Future/Future";
import Stack from "./components/Stack/Stack";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import style from "./Page.module.css";

const Page = () => {
  return (
    <div>
      <div className={style.backImg}>
        <img
          src="https://legends.yonex.com/static/images/yonex-legends_pillar_sidebar-lines-3c91abf93d23bd85ff1f7fd7222c50a8-269.png"
          alt=""
          className={style.background}
        />
      </div>
      <header className={style.navigation}>
        <Navbar />
      </header>
      <div>
        <Route path="/about" render={() => <About />} />
        <Route path="/stack" render={() => <Stack />} />
        <Route path="/future" render={() => <Future />} />
      </div>
    </div>
  );
};

export default Page;
