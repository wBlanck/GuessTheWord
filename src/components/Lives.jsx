import React from "react";

function Lives({ lives, setLives }) {
  return (
    <div className="lives">
      {[...Array(lives)].map((elemt, i) => (
        <span key={i} className="life"></span>
      ))}
    </div>
  );
}

export default Lives;
