import React from "react";
import "./Letters.scss";

export const Letters = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  console.log(alphabet);
  return (
    <div className="letters">
      {alphabet.map((letter) => {
        return <span className="letter">{letter}</span>;
      })}
    </div>
  );
};
