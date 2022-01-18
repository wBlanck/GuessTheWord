import React from "react";
import { Key } from "../Key/Key";

import "./Letters.scss";

export const Letters = ({ handleClick }) => {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return (
    <div className="letters">
      {alphabet.map((letter, i) => {
        return (
          <Key key={i} handleClick={handleClick}>
            {letter}
          </Key>
        );
      })}
    </div>
  );
};
