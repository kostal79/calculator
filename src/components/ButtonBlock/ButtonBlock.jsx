import React from "react";
import ButtonNumber from "../../UI/ButtonNumber/ButtonNumber";
import Styles from "./ButtonBlock.module.scss";

const ButtonBlock = () => {
  const buttons = [];
  for (let i = 9; i >= 0; i--) {
    buttons.push(<ButtonNumber value={i} key={i} />);
  }
  return (
    <div className={Styles["button-block"]}>
      {buttons}
      <ButtonNumber value={","} />
    </div>
  );
};

export default ButtonBlock;
