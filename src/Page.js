import React from "react";
import { Route } from "react-router-dom";
import FullRoadmap from "./components/FullRoadmap/FullRoadmap";
import Future from "./components/Future/Future";
import Stack from "./components/Stack/Stack";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";

const Page = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div>
        <Route path="/about" render={() => <About />} />
        <Route path="/stack" render={() => <Stack />} />
        <Route path="/future" render={() => <Future />} />
        <Route path="/roadmap" render={() => <FullRoadmap />} />
      </div>
    </div>
  );
};

export default Page;
