import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Cover from "./Cover";

ReactDOM.render(
  <BrowserRouter>
    <Cover />
  </BrowserRouter>,
  document.getElementById("root")
);
