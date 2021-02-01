import React, { lazy, Suspense } from "react";
import Preloader from "./components/Preloader/Preloader";
const Page = lazy(() => import("./Page"));

const App = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <Page />
    </Suspense>
  );
};

export default App;
