import CustomButton from "../custom-button/CustomButton";
import "./StartScreen.scss";

function StartScreen() {
  return (
    <div className="start-screen">
      <h1 className="title">Guess The Word</h1>
      <div className="buttons">
        <CustomButton>Play</CustomButton>
      </div>
    </div>
  );
}

export default StartScreen;
