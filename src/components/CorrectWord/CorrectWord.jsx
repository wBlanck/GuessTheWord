import Key from "../Key/Key";
import "./CorrectWord.scss";

import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

function CorrectWord() {
  const { correctWord, word } = useContext(AppContext);
  /* const theWord = []; */

  return (
    <div className="correct-word">
      {correctWord.split("").map((letter, index) => {
        if (word.includes(letter)) {
          return <Key key={index}>{letter}</Key>;
        } else {
          return <Key key={index} />;
        }
      })}
    </div>
  );
}

export default CorrectWord;
