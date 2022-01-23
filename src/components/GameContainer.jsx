import React from "react";
import Navbar from "./Navbar";

function GameContainer({ lives, setLives, setGameState, gameState }) {
  const { hasWon, hasLost } = gameState;
  return (
    <div className="game-container">
      {hasWon && <h1>YOU WON DAWG</h1>}
      {hasLost && <h1>YOU LOST DAWG</h1>}

      {hasLost || hasWon ? null : (
        <Navbar
          lives={lives}
          setLives={setLives}
          setGameState={setGameState}
          gameState={gameState}
        />
      )}
    </div>
  );
}

export default GameContainer;
