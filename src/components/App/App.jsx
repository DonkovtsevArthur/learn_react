import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./App.css";



function tick() {
  const elm = {
    header: (
      <div>
        <h1 className="header">Hello, {this.props.name}</h1>
      </div>
    )
  };
  return elm.header;
}

export default class App extends Component {
  render() {
    return tick.call(this);
  }
}

