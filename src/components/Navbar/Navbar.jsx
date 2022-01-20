import { useContext } from "react";
import AppContext from "../../context/AppContext";

import Icons from "../icons/Icons";
import "./Navbar.scss";

function Navbar() {
  const { play, playAsGuest, correctWord, isGameOver, showHint } =
    useContext(AppContext);

  const lost = (
    <>
      <h1>You lost!</h1>
      <span>Correct word: {correctWord}</span>
      <i className="fas fa-redo-alt"></i>
    </>
  );

  const hint = (
    <>
      <h1>Trade 1 for a hint?</h1>
      <div className="buttons">
        <button>yes</button>
        <button>yes</button>
      </div>
    </>
  );

  return (
    <div className="navbar" onClick={playAsGuest}>
      <span className="play">Play</span>
      {play && <Icons />}
      {isGameOver && lost}
      {showHint && hint}
    </div>
  );
}

export default Navbar;
