import React from "react";
import { useSelector } from "react-redux";
import DragHOC from "../../components/DragHOC/DragHOC";
import Styles from "./Display.module.scss";

const Display = ({ drag, text, opacity, inactive }) => {
  const pointerEvents = inactive && "none";
  const cursor = !inactive && "grab";
  const mode = useSelector((state) => state.constr.mode);
  const display = useSelector((state) => state.logic.display);
  const cursorDisplay = mode === "Runtime" && "default";
  const fontSize = display.length > 8 ? "19px" : "s.$display-size";

  return (
    <div
      className={Styles.container}
      ref={drag ? drag : null}
      style={{ opacity, cursor, pointerEvents }}
    >
      <div
        className={Styles.display}
        style={{ cursor: cursorDisplay, fontSize }}
      >
        {text}
      </div>
    </div>
  );
};

export default DragHOC(Display);
