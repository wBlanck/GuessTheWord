import Lives from "../Lives/Lives";
import "./GameContainer.scss";
import { ReactComponent as Owl } from "../../assets/owl.svg";
import Navbar from "../Navbar/Navbar";
import Letters from "../Letters/Letters";
import CorrectWord from "../CorrectWord/CorrectWord";
import { useState } from "react";

function GameContainer() {
  return (
    <div className="game-container">
      <Owl className="owl" />
      <Lives />
      <div className="wrapper">
        <CorrectWord />
        <Letters />
      </div>

      <Navbar />
    </div>
  );
}

export default GameContainer;
