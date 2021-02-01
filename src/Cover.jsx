import React, { Component, Suspense, lazy } from "react";
import Preloader from "./components/Preloader/Preloader";

const App = lazy(() => import("./App"));

export default class Cover extends Component {
  render() {
    return (
      <Suspense fallback={<Preloader />}>
        <App />
      </Suspense>
    );
  }
}
