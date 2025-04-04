import React from "react";
import HoverCounter from "./component/HoverCounter";
import Counter from "./component/Counter";

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter />
        <HoverCounter />
      </div>
    );
  }
}

export default App;
