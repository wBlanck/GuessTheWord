import Lives from "../Lives/Lives";
import "./GameContainer.scss";
import { ReactComponent as Owl } from "../../assets/owl.svg";
import Letters from "../Letters/Letters";
import CorrectWord from "../CorrectWord/CorrectWord";

function GameContainer() {
  return (
    <div className="game-container">
      <Owl className="owl" />

      <Lives />
      <div className="wrapper">
        <CorrectWord />
        <Letters />
      </div>
    </div>
  );
}

export default GameContainer;
