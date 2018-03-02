import React, { Component } from "react";
import "./Btn.css";

export default class Btn extends Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
    this.clickBtn = this.clickBtn.bind(this);
  }

  clickBtn() {
    this.setState(prevState => ({
      open: !this.state.open
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.clickBtn} className={this.state.open ? "btnopen" : "btnclose"}>
          {this.state.open ? "open " : "close"}
        </button>
        <div className={this.state.open ? " open" : "close"}>
          <h3> Open </h3>
        </div>
      </div>
    );
  }
}
