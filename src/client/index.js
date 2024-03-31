import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./components/app/app.js";



ReactDOM.hydrate(<App/>, document.getElementById("root"));