import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";

import Icons from "../icons/Icons";
import "./Navbar.scss";

function Navbar() {
  const {
    playAsGuest,
    correctWord,

    navbarContent,
  } = useContext(AppContext);

  const restartGameContent = (
    <>
      <h1>You lost!</h1>
      <span>Correct word: {correctWord}</span>
      <i className="fas fa-redo-alt"></i>
    </>
  );

  const hintContent = (
    <>
      <h1>
        Trade <i className="fas fa-heart"></i> for a hint?
      </h1>
      <div className="buttons">
        <button>yes</button>
        <button>no</button>
      </div>
    </>
  );

  const { icons, user, restartGame, hint } = navbarContent;

  return (
    <div className="navbar" onClick={playAsGuest}>
      <span className="play">Play</span>

      {icons && <Icons />}
      {user && "users"}
      {restartGame && restartGameContent}
      {hint && hintContent}
    </div>
  );
}

export default Navbar;
