import React, { PureComponent } from "react"

let interval = null

class RenderingElement extends PureComponent {
  state = {
    time: new Date().toLocaleTimeString() // 根据本地时间把 Date 对象的时间部分转换为字符串
  }

  componentDidMount() {
    // 在第一次渲染后调用
    interval = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    // 在组件从 DOM 中移除之前立刻被调用
    clearInterval(interval)
  }

  tick = () => {
    this.setState({
      time: new Date().toLocaleTimeString()
    })
  }

  render() {
    const { time } = this.state;
    return (
      <div>
        <p>元素渲染</p>
        <h2>new date is {time}</h2>
      </div>
    )
  }
}

export default RenderingElement;
