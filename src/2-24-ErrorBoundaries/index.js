import React, { PureComponent } from "react";

class ErrorBoundaries extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }
    state = { hasError: false }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // logErrorToMyService(error, info);
    console.log(error, info)
  }

  render() {
    if (this.state.hasError) {
      return <div>1111</div>;
    }

    // return this.props.children
    const msg = this.props.children
    return <div>{msg}</div>
  }
}

export default ErrorBoundaries;
