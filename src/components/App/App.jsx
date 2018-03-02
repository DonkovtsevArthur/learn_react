import React, { Component } from "react";

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className="header">Hello, {this.props.name}</h1>
      </div>
    );
  }
}
