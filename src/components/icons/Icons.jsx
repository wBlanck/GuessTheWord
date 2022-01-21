import { useContext } from "react";
import AppContext from "../../context/AppContext";
import Icon from "../../icon/Icon";
import "./Icons.scss";

function Icons() {
  const { openNavBar } = useContext(AppContext);

  return (
    <div className="icons">
      <Icon icon="user-alt"></Icon>
      <Icon
        icon="redo-alt"
        handleClick={() => openNavBar("restart", true)}></Icon>
      <Icon
        icon="question"
        handleClick={() => openNavBar("hintContent", true)}></Icon>
    </div>
  );
}

export default Icons;
