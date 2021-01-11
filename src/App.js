import React from "react";
import FullRoadmap from "./components/FullRoadmap/FullRoadmap";
import Future from "./components/Future/Future";
import Main from "./components/Main/Main";
import Past from "./components/Past/Past";

function App() {
  return (
    <div>
      <Main />
      <Past />
      <Future />
      <FullRoadmap />
    </div>
  );
}

export default App;
