import React, { Component } from "react";
import { Lives } from "../Lives/Lives";
import "./GameContainer.scss";
import { ReactComponent as Owl } from "../../assets/owl.svg";
import { Navbar } from "../Navbar/Navbar";

export default class GameContainer extends Component {
  constructor() {
    super();

    this.state = {
      lives: 9,
    };
  }
  render() {
    return (
      <div className="game-container">
        <Owl className="owl" />
        <Lives lives={this.state.lives} />
        <Navbar />
      </div>
    );
  }
}
