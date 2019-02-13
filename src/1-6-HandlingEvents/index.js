// React 事件使用驼峰命名，而不是全部小写。
// 通过 JSX , 你传递一个函数作为事件处理程序，而不是一个字符串。
import React, { PureComponent, Fragment } from "react";

class Toggle extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // 这个绑定是必要的， 使`this`在回调中起作用
    this.handleClickToggle = this.handleClickToggle.bind(this);
  }

  handleClickToggle() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <Fragment>
        <div>切换按钮</div>
        <button onClick={this.handleClickToggle}>
          {this.state.isToggleOn ? "on" : "off"}
        </button>
      </Fragment>
    );
  }
}

class HandlingEvents extends PureComponent {
  handleClick = () => {
    console.log("this.is:", this);
  };

  defaultActive = e => {
    //   阻止链接打开一个新页面的默认行为
    e.preventDefault();
    console.log("the link was clicked.");
  };

  render() {
    return (
      <Fragment>
        <div>处理事件</div>
        <button onClick={this.handleClick}> click me </button>
        <a href={"IntroducingJSX"} onClick={this.defaultActive}>
          阻止默认行为
        </a>

        <Toggle />
      </Fragment>
    );
  }
}

export default HandlingEvents;
