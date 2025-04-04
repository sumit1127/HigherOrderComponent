import React from "react";
import HigherOrderComponent from "./HigherOrderComponent";

class Counter extends React.Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        {/* <h1>{this.state.count}</h1> */}
        <button onClick={incrementCount}>clicked {count} times</button>
      </div>
    );
  }
}

export default HigherOrderComponent(Counter, 5);
