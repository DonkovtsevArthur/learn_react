import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/App/App.jsx';
import Add from "./components/Add/Add.jsx";
import registerServiceWorker from './registerServiceWorker';


function clock(){
    ReactDOM.render(<Add />, document.getElementById("root"));
    registerServiceWorker();
}

setInterval(clock,1000);
