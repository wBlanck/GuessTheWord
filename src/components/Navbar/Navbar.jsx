import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";

import Icons from "../icons/Icons";
import "./Navbar.scss";

function Navbar() {
  const { playAsGuest, restartGame, tradeLife, navbarContent } =
    useContext(AppContext);

  const restartContent = (
    <>
      <h1>Do you want to restart?</h1>
      <div className="buttons">
        <button onClick={restartGame}>yes</button>
        <button onClick={restartGame}>no</button>
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
        <button onClick={tradeLife}>no</button>
      </div>
    </>
  );

  const { icons, user, restart, hint } = navbarContent;

  return (
    <div className="navbar" onClick={playAsGuest}>
      <span className="play">Play</span>

      {icons && <Icons />}
      {user && "users"}
      {restart && restartContent}
      {hint && hintContent}
    </div>
  );
}

export default Navbar;
