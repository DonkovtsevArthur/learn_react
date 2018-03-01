import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Add.css";
import App from "../App/App";
import Clock from "../Clock/Clock.jsx";

export default class Add extends Component {
    render(){
        return (
            <div>
                <App name="Arthur" />
                <App name="Nasty" />
                <Clock />
            </div>
        )
    }

} 
