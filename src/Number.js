import React, { Component } from "react";
import "./Number.css";

class Number extends Component {
  // static defaultProps = {
  //   n: 0
  // };
  render() {
    return <div className="Number">{this.props.n}</div>;
  }
}

export default Number;
