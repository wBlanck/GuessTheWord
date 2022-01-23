import { useState } from "react";
import GameContainer from "./components/GameContainer";

function App() {
  const [gameState, setGameState] = useState({
    hasWon: false,
    hasLost: false,
    isPlaying: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [lives, setLives] = useState(1);

  //loading spinner function, set isPlaying inside
  const fetchData = () => {
    setIsLoading((prev) => !prev);
    setTimeout(() => {
      setIsLoading((prev) => !prev);
      setGameState({ ...gameState, isPlaying: true });
    }, 3000);
  };

  const { isPlaying } = gameState;

  return (
    <div className={`container ${!isPlaying && "content-center"}`}>
      {!isLoading && !isPlaying && (
        <button className="play-btn" onClick={fetchData}>
          Play
        </button>
      )}

      {isLoading && <h1>Loading Data!</h1>}

      {isPlaying && (
        <GameContainer
          lives={lives}
          setLives={setLives}
          setGameState={setGameState}
          gameState={gameState}
        />
      )}
    </div>
  );
}

export default App;
