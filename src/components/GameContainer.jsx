import LettersContainer from "./LettersContainer";
import Lives from "./Lives";
import Navbar from "./Navbar";

function GameContainer({ lives, setLives, setGameState, gameState }) {
  const { hasWon, hasLost } = gameState;
  return (
    <div className="game-container">
      {hasWon && <h1>YOU WON DAWG</h1>}
      {hasLost && <h1>YOU LOST DAWG</h1>}

      {!hasWon && !hasLost && (
        <>
          <Lives lives={lives} setLives={setLives} />
          <LettersContainer />
          <Navbar
            lives={lives}
            s
            setLives={setLives}
            setGameState={setGameState}
            gameState={gameState}
          />
        </>
      )}
    </div>
  );
}

export default GameContainer;
