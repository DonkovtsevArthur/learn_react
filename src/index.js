import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Add from "./components/Add/Add.jsx";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Add />, document.getElementById("root"));
registerServiceWorker();
