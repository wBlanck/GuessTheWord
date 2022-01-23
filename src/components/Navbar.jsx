import { useState } from "react";

function Navbar({ lives, setLives, setGameState, gameState }) {
  const [navbarContent, setNavbarContent] = useState("");
  const [expandNavbar, setExpandNavbar] = useState(false);

  const tradeLife = () => {
    setLives((prev) => {
      prev -= 1;
      prev === 0 && setGameState({ ...gameState, hasLost: true });
    });
    setExpandNavbar((prev) => !prev);
  };

  const handleClick = (content) => {
    setExpandNavbar((prev) => !prev);
    contentToDisplay(content);
  };

  const contentToDisplay = (content) => {
    switch (content) {
      case "user":
        setNavbarContent(
          <div className="content">
            <h1>user Content</h1>
          </div>
        );
        break;
      case "restart":
        setNavbarContent(
          <div className="content">
            <h1>Restart game?</h1>
            <div className="buttons">
              <button>yes</button>
              <button>no</button>
            </div>
          </div>
        );
        break;
      case "hint":
        setNavbarContent(
          <div className="content">
            <h1>Trade a life for help?</h1>
            <div className="buttons">
              <button onClick={tradeLife}>yes</button>
              <button onClick={() => handleClick()}>no</button>
            </div>
          </div>
        );
        break;
      default:
        console.log("no! close nav");
    }
  };

  const buttons = (
    <div className="buttons">
      <button onClick={() => handleClick("user")}> user </button>
      <button onClick={() => handleClick("restart")}> restart </button>
      <button onClick={() => handleClick("hint")}> hint </button>
    </div>
  );

  return (
    <div className={`navbar ${expandNavbar && "expand"}`}>
      {buttons}

      {expandNavbar && navbarContent}
    </div>
  );
}

export default Navbar;
