import React from "react";
import Styles from "./ButtonOperator.module.scss";

const ButtonOperator = ({ value }) => {
  return (
    <button className={Styles.button} date-button-value={value}>
      {value}
    </button>
  );
};

export default ButtonOperator;
