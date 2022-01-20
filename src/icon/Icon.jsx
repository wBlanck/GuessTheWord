import React from "react";

function Icon({ style, handleClick }) {
  return <i className={`fas fa-${style}`} onClick={handleClick}></i>;
}

export default Icon;
