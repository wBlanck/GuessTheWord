import { useContext } from "react";
import AppContext from "../../context/AppContext";
import Icon from "../../icon/Icon";
import "./Icons.scss";

function Icons() {
  const { setNavbarContent, navbarContent } = useContext(AppContext);
  const navbar = document.querySelector(".navbar");

  const displayHint = () => {
    navbar.classList.add("expand");
    setNavbarContent({
      ...navbarContent,
      icons: false,
      restart: false,
      hint: true,
      user: false,
    });
  };

  const restartGame = () => {
    navbar.classList.add("expand");
    setNavbarContent({
      ...navbarContent,
      icons: false,
      restart: true,
      hint: false,
      user: false,
    });
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
