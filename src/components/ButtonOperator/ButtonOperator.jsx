import React from "react";
import ButtonHOC from "../../hocs/ButtonHOC";
import Styles from "./ButtonOperator.module.scss";

const ButtonOperator = ({ value, cursor, operatorOnClick }) => {
  return (
    <div
      className={Styles.button}
      style={{ cursor }}
      date-button-value={value}
      onClick={operatorOnClick}
    >
      {value}
    </div>
  );
};

export default ButtonHOC(ButtonOperator);
