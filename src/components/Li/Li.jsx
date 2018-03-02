import React, { Component } from "react";

export default class Li extends Component {
  constructor(props) {
    super(props);
    this.newa = () => {
      const newarr = props.arr.map((name, index) => <li key={index}>{name}</li>);
      return newarr;
    };
  }
  render() {
    return <ul>{this.newa()}</ul>;
  }
}
