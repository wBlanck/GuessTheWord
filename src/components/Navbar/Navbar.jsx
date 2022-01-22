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
    tradedForHint,
    closeNavbar,
    lives,
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

  const hintEles = (
    <>
      {tradedForHint && lives > 1 ? (
        <h1> you already traded </h1>
      ) : lives < 2 ? (
        <h1>
          cant trade last <i className="fas fa-heart"></i>
        </h1>
      ) : (
        <h1>
          Trade <i className="fas fa-heart"></i> for a hint?
        </h1>
      )}

      {tradedForHint || (lives < 2 && !tradedForHint) ? (
        <button onClick={closeNavbar}>K then</button>
      ) : (
        <div className="buttons">
          <button onClick={tradeLife}>yes</button>
          <button onClick={closeNavbar}>no</button>
        </div>
      )}
    </>
  );
  const lostContent = (
    <>
      <h1>You lost!</h1>
      <p>Correct word is: {correctWord} </p>
      <Icon icon="redo-alt" handleClick={restartGame}></Icon>
    </>
  );

  const { icons, user, restart, hintContent, lost } = navbarContent;

  return (
    <div className="navbar" onClick={playAsGuest}>
      <span className="play">Play</span>

      {icons && <Icons />}
      {user && "users"}
      {restart && restartContent}
      {hintContent && hintEles}
      {lost && lostContent}
    </div>
  );
}

export default Navbar;
