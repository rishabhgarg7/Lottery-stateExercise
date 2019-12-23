import React, { Component } from "react";
import "./Box.css";

import Number from "./Number";

class Box extends Component {
  static defaultProps = {
    name: "Name",
    numberOfBalls: 4,
    maxValue: 10
  };

  constructor(props) {
    super(props);
    this.state = {
      nums: Array.from({ length: this.props.numberOfBalls })
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(currstate => ({
      nums: currstate.nums.map(
        n => Math.floor(Math.random() * this.props.maxValue) + 1
      )
    }));
  }

  render() {
    return (
      <div className="Box">
        <h3>{this.props.name}</h3>

        {/* <Number n={this.state.n1} />
        <Number n={this.state.n2} /> */}

        {this.state.nums.map(n => (
          <Number n={n} />
        ))}
        <br />
        <br />
        <button onClick={this.handleClick}>Generate Lottery Numbers</button>
      </div>
    );
  }
}

export default Box;
