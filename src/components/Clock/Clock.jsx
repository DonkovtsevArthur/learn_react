import React, { Component } from "react";


export default class Clock extends Component {
    render(){
        return <div><h2>{new Date().toLocaleTimeString()}</h2></div>;
    }
}