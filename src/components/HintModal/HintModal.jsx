import { useContext } from "react";
import AppContext from "../../context/AppContext";
import "./HintModal.scss";

function HintModal() {
  const { hint } = useContext(AppContext);
  return (
    <div className="hint-modal">
      <h1>HINT: {hint}</h1>
    </div>
  );
}

export default HintModal;
