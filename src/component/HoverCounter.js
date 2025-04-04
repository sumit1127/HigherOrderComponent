import React from "react";
import HigherOrderComponent from "./HigherOrderComponent";

class HoverCounter extends React.Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h2 onMouseOver={incrementCount}>hover {count} times</h2>
      </div>
    );
  }
}

export default HigherOrderComponent(HoverCounter, 10);
