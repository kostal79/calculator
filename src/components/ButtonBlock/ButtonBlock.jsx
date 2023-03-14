import React from "react";
import ButtonNumber from "../ButtonNumber/ButtonNumber";
import DragHOC from "../../hocs/DragHOC";
import Styles from "./ButtonBlock.module.scss";

const ButtonBlock = ({ drag, opacity, inactive }) => {
  const pointerEvents = inactive && "none";
  const cursor = !inactive && "grab";
  const buttons = [];

  for (let i = 9; i >= 0; i--) {
    buttons.push(<ButtonNumber value={i} key={i} />);
  }

  return (
    <div
      className={Styles["button-block"]}
      ref={drag ? drag : null}
      style={{ opacity, pointerEvents, cursor }}
    >
      {buttons}
      <ButtonNumber value={","} />
      <ButtonNumber value={"Clear"} />
    </div>
  );
};

export default DragHOC(ButtonBlock);
