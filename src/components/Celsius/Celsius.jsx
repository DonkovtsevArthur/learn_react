import React, { Component } from "react";
import "./Celsius.css";

class Celsius extends Component {
  constructor(props) {
    super(props);
    this.state = { value: [] };
    this.writeTemp = this.writeTemp.bind(this);
  }
  verdicTemp(t) {
    return t >= 100 ? "теплая" : "холодная";
  }
  writeTemp(event) {
    let nums = event.target.value;
    if (+nums >= 0) {
      this.setState({ value: nums });
    } else {
      alert("Введите число");
      return this.setState({ value: [] });
    }
  }
  toCelsius(t) {
    return (t - 32) * 5 / 9;
  }
  toFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
  }
  render() {
    const temper = this.state.value || 0;
    return (
      <div className="temp">
        <h5>Опеределяем градус:</h5>
        <input
          type="text"
          placeholder="Введите число"
          value={this.state.value}
          onChange={this.writeTemp}
        />

        <p>{this.toCelsius(temper).toFixed(3)} &#176;C (F => C)</p>
        <p>{this.toFahrenheit(temper)} &#176;F (C => F)</p>
        <p>Вода: {this.verdicTemp(temper)}</p>
      </div>
    );
  }
}

export default Celsius;
