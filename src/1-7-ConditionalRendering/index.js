import React, { PureComponent, Fragment } from "react";

function UserGreeting(props) {
  return <h3>Welcome back!</h3>;
}
function GuestGreeting(props) {
  return <h3>Please sign up.</h3>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

class ConditionalRendering extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };

    this.signStatus = this.signStatus.bind(this);
  }

  signStatus() {
    this.setState(state => ({ isLoggedIn: !state.isLoggedIn }));
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <Fragment>
        <div>react 条件渲染</div>
        <button onClick={this.signStatus}>
          {isLoggedIn ? "sign out" : "sign up"}
        </button>
        <Greeting isLoggedIn={isLoggedIn} />
      </Fragment>
    );
  }
}

export default ConditionalRendering;
