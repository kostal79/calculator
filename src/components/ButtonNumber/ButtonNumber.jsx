import React from "react";
import ButtonHOC from "../../hocs/ButtonHOC";
import Styles from "./ButtonNumber.module.scss";

const ButtonNumber = ({ value, cursor, numbersOnClick }) => {

  return (
    <div
      className={Styles.button}
      style={{ cursor }}
      data-button-value={value}
      onClick={numbersOnClick}
    >
      {value}
    </div>
  );
};

export default ButtonHOC(ButtonNumber);
