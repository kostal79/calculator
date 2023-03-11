import React from "react";
import ButtonNumber from "../../UI/ButtonNumber/ButtonNumber";
import DragHOC from "../DragHOC/DragHOC";

import Styles from "./ButtonBlock.module.scss";

const ButtonBlock = ({ drag }) => {
  const buttons = [];
  for (let i = 9; i >= 0; i--) {
    buttons.push(<ButtonNumber value={i} key={i} />);
  }

  return (
    <div className={Styles["button-block"]} ref={drag ? drag : null}>
      {buttons}
      <ButtonNumber value={","} />
    </div>
  );
};

export default DragHOC(ButtonBlock);
