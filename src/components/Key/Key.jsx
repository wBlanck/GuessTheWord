import React from "react";
import "./Key.scss";
export const Key = ({ handleClick, children }) => {
  return (
    <span className="letter" onClick={handleClick}>
      {children}
    </span>
  );
};
