import { useContext } from "react";
import AppContext from "../../context/AppContext";
import "./CustomButton.scss";

function CustomButton({ children }) {
  const { playAsGuest } = useContext(AppContext);
  return (
    <button className="button" onClick={playAsGuest}>
      {children}
    </button>
  );
}

export default CustomButton;
