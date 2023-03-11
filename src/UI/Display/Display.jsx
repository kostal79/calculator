import React from "react";
import DragHOC from "../../components/DragHOC/DragHOC";
import Styles from "./Display.module.scss";

const Display = ({ drag, text }) => {
  return (
    <div className={Styles.container} ref={drag ? drag : null}>
      <div className={Styles.display}>{text}</div>
    </div>
  );
};

export default DragHOC(Display);
