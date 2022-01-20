import "./App.scss";

import { ReactComponent as Grass } from "./assets/grass.svg";
import { ReactComponent as Moon } from "./assets/moon.svg";

import StartScreen from "./components/StartScreen/StartScreen";
import GameContainer from "./components/GameContainer/GameContainer";
import { useContext } from "react";
import AppContext from "./context/AppContext";

function App() {
  const { startScreen } = useContext(AppContext);

  return (
    <div className="container">
      <div className="sky"></div>
      <Moon className="moon" />
      <Grass className="grass" />
      <div className="gradient"></div>

      {startScreen ? <StartScreen /> : <GameContainer />}
    </div>
  );
}

export default App;
