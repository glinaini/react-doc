import React, { Component } from "react";

function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
}

// function WelcomeDialog() {
//   return (
//     <FancyBorder color="blue">
//       <h1 className="Dialog-title">Welcome</h1>
//       <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
//     </FancyBorder>
//   );
// }

// function SplitPane(props) {
//   return (
//     <div className="SplitPane">
//       <div className="SplitPane-left">{props.left}</div>
//       <div className="SplitPane-right"> {props.right}</div>
//     </div>
//   );
// }

// function App(){
//     return(
//         <SplitPane left={<Contacts></Contacts>} right={<Chat></Chat>}></SplitPane>
//     )
// }

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
      {props.children}
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog title="Welcome" message="Thank you for visiting our spacecraft!" />
  );
}

export default class CompositionVsInheritance extends Component {
  constructor(props) {
    super(props);
    this.state = { login: "" };
    this.handleSignUp = this.handleSignUp.bind(this)
  }

  handleSignUp(){
    alert(`Welcome aboard, ${this.state.login}!`)
  }
  render() {
    return (
      <div>
        <p>组合（Composition）Vs继承（Inheritance）</p>
        <WelcomeDialog />
        <Dialog
          title="Mars Exploration Program"
          message="How should we refer to you?"
        >
          <input
            value={this.state.login}
            onChange={e => this.setState({ login: e.target.value })}
          />
          <button onClick={this.handleSignUp}>
            Sign Me Up!
          </button>
        </Dialog>
      </div>
    );
  }
}
