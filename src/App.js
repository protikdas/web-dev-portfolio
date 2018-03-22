import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//<-------Components------>//
import PageView from "./higher-order-components/PageView";
import Hello from "./components/Hello/Hello";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageView component={() => <Hello />} />
      </div>
    );
  }
}

export default App;
