import React from "react";
import "./index.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  createLayout = () => {
    const counterIncrement = React.createElement(
      "button",
      {
        className: "counter__button counter__button_increment",
        onClick: this.increment,
      },
      "+"
    );
    const counterDecrement = React.createElement(
      "button",
      {
        className: "counter__button counter__button_decrement",
        onClick: this.decrement,
      },
      "-"
    );
    const counterInput = React.createElement("input", {
      className: "counter__input",
      value: this.state.count,
      readOnly: true,
    });

    return React.createElement("div", { className: "counter" }, 
      counterDecrement,
      counterInput,
      counterIncrement,
    );
  };

  render() {
    return this.createLayout();
  }
}

export default Counter;
