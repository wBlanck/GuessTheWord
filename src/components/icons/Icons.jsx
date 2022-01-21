import { useContext } from "react";
import AppContext from "../../context/AppContext";
import Icon from "../../icon/Icon";
import "./Icons.scss";

function Icons() {
  const { openNavBar } = useContext(AppContext);

  return (
    <div className="icons">
      <Icon style="user-alt"></Icon>
      <Icon
        style="redo-alt"
        handleClick={() => openNavBar("restart", true)}></Icon>
      <Icon
        style="question"
        handleClick={() => openNavBar("hint", true)}></Icon>
    </div>
  );
}

export default Icons;
