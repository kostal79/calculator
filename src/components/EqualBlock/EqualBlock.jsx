import React from "react";
import DragHOC from "../../hocs/DragHOC";
import ButtonEqual from "../ButtonEqual/ButtonEqual";
import Styles from "./EqualBlock.module.scss";

const EqualBlock = ({ drag, opacity, inactive }) => {
  const pointerEvents = inactive && "none";
  const cursor = !inactive && "grab";
  return (
    <div
      className={Styles.container}
      ref={drag ? drag : null}
      style={{ cursor, pointerEvents, opacity }}
    >
      <ButtonEqual value={"="}/>
    </div>
  );
};

export default DragHOC(EqualBlock);
