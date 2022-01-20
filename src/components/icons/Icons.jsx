import { useContext } from "react";
import AppContext from "../../context/AppContext";
import Icon from "../../icon/Icon";
import "./Icons.scss";

function Icons() {
  const { setShowHint, hint, setPlay } = useContext(AppContext);
  const navbar = document.querySelector(".navbar");

  const displayHint = () => {
    setShowHint(true);
    navbar.classList.add("expand");
  };

  const restartGame = () => {
    navbar.classList.add("expand");
  };

  return (
    <div className="icons">
      <Icon style="user-alt"></Icon>
      <Icon style="redo-alt" handleClick={restartGame}></Icon>
      <Icon style="question" handleClick={displayHint}></Icon>
    </div>
  );
}

export default Icons;
