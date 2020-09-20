import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import PRIX from "./PRIX";
import "./index.css";

ReactDOM.render(
  <Router>
    <PRIX />
  </Router>,
  document.getElementById("root")
);
