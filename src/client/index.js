import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./components/app/app.js";

const columns=window.columns;
const data=window.data;
const newColumns=columns.map((obj)=>({...obj, selector: (row)=> row[(obj.name).toLowerCase()]}))


ReactDOM.hydrate(<App columns={newColumns} data={data}/>, document.getElementById("root"));