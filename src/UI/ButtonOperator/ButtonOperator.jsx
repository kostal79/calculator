import React from "react";
import Styles from "./ButtonOperator.module.scss";

const ButtonOperator = ({ value }) => {
  return (
    <div className={Styles.button} date-button-value={value}>
      {value}
    </div>
  );
};

export default ButtonOperator;
