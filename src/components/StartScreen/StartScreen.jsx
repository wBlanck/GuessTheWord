import CustomButton from "../custom-button/CustomButton";
import "./StartScreen.scss";

import React from "react";

function StartScreen() {
  return (
    <div className="start-screen">
      <h1 className="title">Guess The Word</h1>
      <div className="buttons">
        <CustomButton>Login</CustomButton>
        <CustomButton>Play As Guest</CustomButton>
      </div>
    </div>
  );
}

export default StartScreen;
