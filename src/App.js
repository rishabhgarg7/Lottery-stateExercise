import React, { Component } from "react";
import "./App.css";
import Box from "./Box";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Box name={"Big Component"} maxValue={40} numberOfBalls={5} />
        <Box name={"Mini Component"} maxValue={10} numberOfBalls={3} />
      </div>
    );
  }
}

export default App;
