import "./Key.scss";

import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

function Key({ children }) {
  const { checkLetter } = useContext(AppContext);
  return (
    <span className="letter" onClick={checkLetter}>
      {children}
    </span>
  );
}

export default Key;
