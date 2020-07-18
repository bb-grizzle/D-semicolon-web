import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Root from "client/Root";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Root />, document.getElementById("root"));

serviceWorker.unregister();
