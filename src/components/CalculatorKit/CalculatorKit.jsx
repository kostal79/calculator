import React from "react";
import ButtonBlock from "../ButtonBlock/ButtonBlock";
import OperatorBlock from "../OperatorBlock/OperatorBlock";
import Styles from "./CalculatorKit.module.scss";
import { ReactComponent as UndoIcon } from "../../assets/undo.svg";
import { useDispatch, useSelector } from "react-redux";
import { popQueue, undoDroped } from "../../redux/slices/dropSlice";
import ButtonEqual from "../ButtonEqual/ButtonEqual";
import Display from "../Display/Display";

const CalculatorKit = () => {
  const mode = useSelector((state) => state.constr.mode);
  const droped = useSelector((state) => state.drop.droped);
  const queue = useSelector((state) => state.drop.queue);
  const dispatch = useDispatch();

  const undoHandler = () => {
    const lastElement = queue.at(-1);
    dispatch(undoDroped(lastElement));
    dispatch(popQueue(lastElement));
  };

  if (mode === "Runtime") {
    return;
  } else {
    return (
      <div className={Styles.calculator}>
        {mode === "Constructor" && droped.length > 0 && (
          <div className={Styles.undo} onClick={undoHandler}>
            <UndoIcon />
          </div>
        )}
        <Display name="display" text="0" constraction />
        <OperatorBlock name="operator_block" constraction />
        <ButtonBlock name="button_block" constraction />
        <ButtonEqual name="equal" constraction />
      </div>
    );
  }
};

export default CalculatorKit;
