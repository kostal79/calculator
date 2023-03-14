import React from "react";
import ButtonHOC from "../../hocs/ButtonHOC";
import Styles from "./ButtonEqual.module.scss";

const ButtonEqual = ({ value, cursor, equalOnClick }) => {
  return (
    <div
      className={Styles.button}
      data-button-value={"="}
      style={{ cursor }}
      onClick={equalOnClick}
    >
      {value}
    </div>
  );
};

export default ButtonHOC(ButtonEqual);
