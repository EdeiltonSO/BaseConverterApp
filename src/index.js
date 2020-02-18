import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

var http = require("http");
setInterval(function() {
  http.get("http://baseconverterapp.herokuapp.com");
}, 300000); // every 5 minutes (300000)

ReactDOM.render(<App />, document.getElementById("root"));
