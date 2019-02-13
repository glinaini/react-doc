import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import HelloWord from "./1-HelloWord";
import IntroducingJSX from "./1-2-IntroducingJSX";
import RenderingElement from "./1-3-RenderingElements";
import ComponentsAndProps from "./1-4-ComponentsAndProps";
import StateAndLiftcycle from "./1-5-StateAndLifecycle";
import HandlingEvents from "./1-6-HandlingEvents";
import ErrorBoundaries from "./2-24-ErrorBoundaries";

class App extends Component {
  render() {
    return (
      <Router>
        <ErrorBoundaries>
          <Route path="/" component={HelloWord} />
          <Route path="/IntroducingJSX/" component={IntroducingJSX} />
          <Route path="/RenderingElement/" component={RenderingElement} />
          <Route path="/ComponentsAndProps/" component={ComponentsAndProps} />
          <Route path="/StateAndLiftcycle/" component={StateAndLiftcycle} />
          <Route path="/HandlingEvents/" component={HandlingEvents} />
        </ErrorBoundaries>
      </Router>
    );
  }
}

export default App;
