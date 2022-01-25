import React from "react";
import Letter from "./Letter";

function Letters() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div className="letters-container">
      <div className="correct-letters">
        <Letter />
        <Letter />
        <Letter />
        <Letter />
      </div>
      <div className="alphabet">
        {alphabet.map((letter) => (
          <Letter>{letter}</Letter>
        ))}
      </div>
    </div>
  );
}

export default Letters;
