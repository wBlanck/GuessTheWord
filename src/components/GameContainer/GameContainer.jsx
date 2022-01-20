import Lives from "../Lives/Lives";
import "./GameContainer.scss";
import { ReactComponent as Owl } from "../../assets/owl.svg";
import Navbar from "../Navbar/Navbar";
import Letters from "../Letters/Letters";
import CorrectWord from "../CorrectWord/CorrectWord";
import { useState } from "react";

function GameContainer({ correctWord }) {
  const [lives, setLives] = useState(9);

  return (
    <div className="game-container">
      <Owl className="owl" />
      <Lives />
      <div className="wrapper">
        <CorrectWord correctWord={correctWord} />
        <Letters />
      </div>

      <Navbar />
    </div>
  );
}

export default GameContainer;
