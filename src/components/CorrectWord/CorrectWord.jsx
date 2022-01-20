import Key from "../Key/Key";
import "./CorrectWord.scss";

import React from "react";

function CorrectWord({ correctWord }) {
  return (
    <div className="correct-word">
      {correctWord.split("").map((letter, index) => (
        <Key key={index} />
      ))}
    </div>
  );
}

export default CorrectWord;
