import React from "react";
import Styles from "./ButtonEqual.module.scss";

const ButtonEqual = () => {
  return (
    <div className={Styles.container}>
      <button className={Styles.button} data-button-valu={"="}>
        =
      </button>
    </div>
  );
};

export default ButtonEqual;
