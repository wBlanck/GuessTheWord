import React from "react";

function Icon({ icon, handleClick }) {
  return <i className={`fas fa-${icon}`} onClick={handleClick}></i>;
}

export default Icon;
