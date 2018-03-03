import React, { Component } from "react";
import "./Form.css";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: " ", text: " " };
    this.changeSend = this.changeSend.bind(this);
    this.sendClick = this.sendClick.bind(this);
  }
  changeSend(event) {
    switch (event.target.type) {
      case "text":
        this.setState({
          text: event.target.value
        });
        break;
      case "textarea":
        this.setState({
          value: event.target.value
        });
        break;
    }
  }

  sendClick(event) {
    alert("Your send mail: " + this.state.text + " and  " + this.state.value);

    this.setState({
      value: " ",
      text: " "
    });
    event.preventDefault(); // не обновляет страницу
  }
  render() {
    return (
      <form className="form" onSubmit={this.sendClick}>
        <h3>Write me!</h3>
        <input
          type="text"
          placeholder="hello"
          value={this.state.text}
          onChange={this.changeSend}
        />

        <textarea
          type="textarea"
          value={this.state.value}
          onChange={this.changeSend}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
