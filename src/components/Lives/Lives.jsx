import "./Lives.scss";

import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

function Lives() {
  const { lives } = useContext(AppContext);
  const arr = Array.from(Array(lives));
  return (
    <div className="lives">
      {arr.map((life, i) => (
        <i key={i} className="fas fa-heart"></i>
      ))}
    </div>
  );
}

export default Lives;
