import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import Icon from "../../icon/Icon";

import Icons from "../icons/Icons";
import "./Navbar.scss";

function Navbar() {
  const {
    playAsGuest,
    restartGame,
    tradeLife,
    navbarContent,
    correctWord,

    closeNavbar,
  } = useContext(AppContext);

  const restartContent = (
    <>
      <h1>Do you want to restart?</h1>
      <div className="buttons">
        <button onClick={restartGame}>yes</button>
        <button onClick={closeNavbar}>no</button>
      </div>
    </>
  );

  const hintContent = (
    <>
      <h1>
        Trade <i className="fas fa-heart"></i> for a hint?
      </h1>
      <div className="buttons">
        <button onClick={tradeLife}>yes</button>
        <button onClick={closeNavbar}>no</button>
      </div>
    </>
  );
  const lostContent = (
    <>
      <h1>You lost!</h1>
      <p>Correct word is: {correctWord} </p>
      <Icon style="redo-alt" handleClick={restartGame}></Icon>
    </>
  );

  const { icons, user, restart, hint, lost } = navbarContent;

  return (
    <div className="navbar" onClick={playAsGuest}>
      <span className="play">Play</span>

      {icons && <Icons />}
      {user && "users"}
      {restart && restartContent}
      {hint && hintContent}
      {lost && lostContent}
    </div>
  );
}

export default Navbar;
