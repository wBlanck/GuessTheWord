import "./App.scss";

import React, { Component } from "react";
import { ReactComponent as Grass } from "./assets/grass.svg";
import { ReactComponent as Moon } from "./assets/moon.svg";
import { CustomButton } from "./components/custom-button/CustomButton";

export default class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container">
        <div className="sky"></div>
        <Moon className="moon" />
        <Grass className="grass" />
        <div className="gradient"></div>
        {/* CONTENT */}
        <h1 className="title">Guess The Word</h1>
        <div className="buttons">
          <CustomButton>Login</CustomButton>
          <CustomButton>Play As Guest</CustomButton>
        </div>
      </div>
    );
  }
}
