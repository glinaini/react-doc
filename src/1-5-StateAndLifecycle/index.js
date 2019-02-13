import React, { PureComponent, Fragment } from "react";

// function FormattedDate(props) {
//   return <h3>time is {props.date.toLocalTimeString()}</h3>;
// }

function Clock(props) {
  return (
    <div>
      <h2>time is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

let timerID = null;

class StateAndLiftcycle extends PureComponent {
  state = { date: new Date() };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const { date } = this.state;
    return (
      <Fragment>
        <div>状态和生命周期</div>
        <Clock date={date} />
      </Fragment>
    );
  }
}
export default StateAndLiftcycle;
