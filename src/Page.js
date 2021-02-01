import React from "react";
import { Route } from "react-router-dom";
import FullRoadmap from "./components/FullRoadmap/FullRoadmap";
import Future from "./components/Future/Future";
import Main from "./components/Main/Main";
import Past from "./components/Past/Past";
import Navbar from "./components/Navbar/Navbar";

const Page = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div>
        <Route path="/main" render={() => <Main />} />
        <Route path="/past" render={() => <Past />} />
        <Route path="/future" render={() => <Future />} />
        <Route path="/roadmap" render={() => <FullRoadmap />} />
      </div>
    </div>
  );
};

export default Page;
