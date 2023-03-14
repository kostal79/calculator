import React from "react";
import Styles from "./UndoArrow.module.scss";
import { ReactComponent as UndoIcon } from "../../assets/undo.svg";
import UndoHOC from "../../hocs/UndoHOC";

const UndoArrow = ({active, onClick}) => {
  return (
    <>
      {active && (
        <div className={Styles.undo} onClick={onClick}>
          <UndoIcon />
        </div>
      )}
    </>
  );
};

export default UndoHOC(UndoArrow);
