import "./App.scss";

import { ReactComponent as Grass } from "./assets/grass.svg";
import { ReactComponent as Moon } from "./assets/moon.svg";

import GameContainer from "./components/GameContainer/GameContainer";
import { useContext, useEffect } from "react";
import AppContext from "./context/AppContext";
import Navbar from "./components/Navbar/Navbar";

import HintModal from "./components/HintModal/HintModal";

function App() {
  const { play, fetchRandomWord } = useContext(AppContext);
  /* useEffect(() => {
    fetchRandomWord();
  }, []); */
  return (
    <div className="container">
      <div className="sky"></div>
      <Moon className="moon" />
      <Grass className="grass" />
      <div className="gradient"></div>
      <HintModal />
      {!play ? <h1 className="title">Guess the word</h1> : <GameContainer />}

      <Navbar />
    </div>
  );
}

export default App;
