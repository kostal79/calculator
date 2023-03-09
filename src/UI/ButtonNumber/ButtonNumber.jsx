import React from "react";
import Styles from "./ButtonNumber.module.scss";

const ButtonNumber = ({ value }) => {
  return (
    <button className={Styles.button} data-button-value={value}>
      {value}
    </button>
  );
};

export default ButtonNumber;
