// React 事件使用驼峰命名，而不是全部小写。
// 通过 JSX , 你传递一个函数作为事件处理程序，而不是一个字符串。
import React, { PureComponent, Fragment } from "react";

class HandlingEvents extends PureComponent {
  render() {
    return (
      <Fragment>
        <div>处理事件</div>
      </Fragment>
    );
  }
}

export default HandlingEvents;
