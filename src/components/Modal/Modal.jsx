import "./Modal.scss";
function Modal() {
  return (
    <div className="modal">
      <h1>Restart game?</h1>
      <div className="buttons">
        <button>Yes</button>
        <button>no</button>
      </div>
    </div>
  );
}

export default Modal;
