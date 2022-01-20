import "./App.scss";

import { ReactComponent as Grass } from "./assets/grass.svg";
import { ReactComponent as Moon } from "./assets/moon.svg";

import { StartScreen } from "./components/StartScreen/StartScreen";
import GameContainer from "./components/GameContainer/GameContainer";
import { useState } from "react";

function App() {
  const [correctWord, setCorrectWord] = useState("tiger");
  return (
    <div className="container">
      <div className="sky"></div>
      <Moon className="moon" />
      <Grass className="grass" />
      <div className="gradient"></div>
      {/* CONTENT */}
      {/* <StartScreen /> */}
      <GameContainer correctWord={correctWord} />
    </div>
  );
}

export default App;
