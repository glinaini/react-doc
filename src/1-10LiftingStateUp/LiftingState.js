import React, { Component } from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>水开了哟</p>;
  }
  return <p>水还没有开，请耐心等待哟！</p>;
}

// 摄氏度与华氏度得转换
function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
// 华氏温度与摄氏温度之间的 转换  结果转为字符串
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) return "";
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  console.log(output)
  return rounded.toString();
}

export default class LiftingState extends Component {
  constructor(props) {
    super(props);
    this.state = { temperature: "", scale: "c" };
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    this.handlefahrenheitChange = this.handlefahrenheitChange.bind(this)
  }

  handleCelsiusChange(temperature){
      this.setState({scale: "c", temperature})
  }
  handlefahrenheitChange(temperature){
      this.setState({scale: "f", temperature})
  }

  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <p>状态提升 (Lifting State Up)</p>

        {/* <fieldset>
          <legend>请输入你得温度：</legend>
          <input
            value={temperature}
            onChange={e => this.setState({ temperature: e.target.value })}
          />
          <BoilingVerdict celsius={parseFloat(temperature)} />
        </fieldset> */}

        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handlefahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)}></BoilingVerdict>
      </div>
    );
  }
}
