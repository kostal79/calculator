import React from "react";
import Styles from "./ButtonNumber.module.scss";

const ButtonNumber = ({ value }) => {
  return (
    <div className={Styles.button} data-button-value={value}>
      {value}
    </div>
  );
};

export default ButtonNumber;
