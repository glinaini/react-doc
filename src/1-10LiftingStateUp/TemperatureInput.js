import React, { Component } from "react";
const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit"
};



export default class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.state = { };
    // this.state = { temperature: "" };
  }
  render() {
    // const { temperature } = this.state;
    // const scale = this.props.scale;
    const { temperature,onTemperatureChange, scale} = this.props
    return (
      <div>
        {/* <text> temperature Input </text> */}
        <fieldset>
          <legend>enter temperature in {scaleNames[scale]}</legend>
          <input
            value={temperature}
            // onChange={e => this.setState({ temperature: e.target.value })}
            onChange={e => onTemperatureChange(e.target.value )}
          />
        </fieldset>
      </div>
    );
  }
}
