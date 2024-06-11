import './App.css'

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import ShoppingArea from "./components/ShoppingArea";
// import ShoppingItems from "./components/ShoppingItems";

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ShoppingArea/>
      </div>
    );
  }
}

export default App;
