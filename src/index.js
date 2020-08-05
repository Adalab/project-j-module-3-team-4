import React from "react";
import { HashRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./stylesheets/index.scss";
import App from "./containers/App";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
