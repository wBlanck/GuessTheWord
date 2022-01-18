import React from "react";
import "./CustomButton.scss";

export const CustomButton = ({ children }) => {
  return <button className="button">{children}</button>;
};
