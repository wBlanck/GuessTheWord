import "./App.scss";

import React, { Component } from "react";
import { ReactComponent as Grass } from "./assets/grass.svg";
import { ReactComponent as Moon } from "./assets/moon.svg";

import { StartScreen } from "./components/StartScreen/StartScreen";
import GameContainer from "./components/GameContainer/GameContainer";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      theWord: "tiger",
      user: "",
    };
  }
  render() {
    return (
      <div className="container">
        <div className="sky"></div>
        <Moon className="moon" />
        <Grass className="grass" />
        <div className="gradient"></div>
        {/* CONTENT */}
        {/* <StartScreen /> */}
        <GameContainer />
      </div>
    );
  }
}
