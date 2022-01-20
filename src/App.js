import "./App.scss";

import { ReactComponent as Grass } from "./assets/grass.svg";
import { ReactComponent as Moon } from "./assets/moon.svg";

import GameContainer from "./components/GameContainer/GameContainer";
import { useContext } from "react";
import AppContext from "./context/AppContext";
import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/Modal/Modal";

function App() {
  const { play } = useContext(AppContext);

  return (
    <div className="container">
      <div className="sky"></div>
      <Moon className="moon" />
      <Grass className="grass" />
      <div className="gradient"></div>

      {!play ? <h1 className="title">Guess the word</h1> : <GameContainer />}

      <Navbar />
    </div>
  );
}

export default App;
