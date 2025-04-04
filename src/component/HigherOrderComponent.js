import React from "react";

const HigherOrderComponent = (WrappedComponent, x) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return {
          count: prevState.count + x,
        };
      });
    };
    render() {
      return (
        <div>
          <WrappedComponent
            count={this.state.count}
            incrementCount={this.incrementCount}
            {...this.props}
          />
        </div>
      );
    }
  }
  return WithCounter;
};

export default HigherOrderComponent;
