import React from "react";
import DragHOC from "../../components/DragHOC/DragHOC";
import Styles from "./ButtonEqual.module.scss";

const ButtonEqual = ({ drag }) => {
  return (
    <div className={Styles.container} ref={drag ? drag : null}>
      <div className={Styles.button} data-button-valu={"="}>
        =
      </div>
    </div>
  );
};

export default DragHOC(ButtonEqual);
