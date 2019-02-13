import React, { PureComponent, Fragment } from "react";
import Extracting from "./extracting";
import avatarImg from "../logo.svg";

// 定义组件
function Welcome(props) {
  return <h1>define components name is {props.name}</h1>;
}

class Hello extends PureComponent {
  render() {
    const { name } = this.props;
    return <h2>define component name is {name}</h2>;
  }
}

const world = <Welcome name="welcome react" />;

const author = {
  avatarUrl: avatarImg,
  name: "react"
};

class ComponentsAndProps extends PureComponent {
  render() {
    return (
      <Fragment>
        <div>组件（components）和属性（props）</div>
        <Hello name="Hello" />
        <Welcome name="welcome" />
        {world}
        <Extracting
          author={author}
          text="Don't be afraid to split components into smaller components."
          date={new Date().toLocaleTimeString()}
        />
      </Fragment>
    );
  }
}

export default ComponentsAndProps;
