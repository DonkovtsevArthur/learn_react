import React, { Component } from "react";

import "./Add.css";
import App from "../App/App";
import Clock from "../Clock/Clock.jsx";
import Btn from "../Btn/Btn.jsx";
import Li from "../Li/Li.jsx";
import Form from "../Form/Form.jsx";

export default class Add extends Component {
    render(){
        return (<div className="appHeader">
            <App name="Arthur" />
            <App name="Nasty" />
            <Clock />
            <Btn />
            <Li arr={["One", "Two", "Three"]} />
            <Form />
          </div>
         ) }
} 

