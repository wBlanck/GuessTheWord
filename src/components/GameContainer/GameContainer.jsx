import React, { Component } from "react";
import { Lives } from "../Lives/Lives";
import "./GameContainer.scss";
import { ReactComponent as Owl } from "../../assets/owl.svg";
import { Navbar } from "../Navbar/Navbar";
import { Letters } from "../Letters/Letters";
import { CorrectWord } from "../CorrectWord/CorrectWord";

export default class GameContainer extends Component {
  constructor() {
    super();

    this.state = {
      lives: 9,
    };
  }
  handleClick(e) {
    console.log("hej");
    console.log(e.target);
  }

  render() {
    return (
      <div className="game-container">
        <Owl className="owl" />
        <Lives lives={this.state.lives} />
        <div className="wrapper">
          <CorrectWord />
          <Letters handleClick={this.handleClick} />
        </div>

        <Navbar />
      </div>
    );
  }
}
