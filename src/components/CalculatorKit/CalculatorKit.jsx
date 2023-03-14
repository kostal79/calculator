import React from "react";
import ButtonBlock from "../ButtonBlock/ButtonBlock";
import OperatorBlock from "../OperatorBlock/OperatorBlock";
import { useSelector } from "react-redux";
import Display from "../Display/Display";
import EqualBlock from "../EqualBlock/EqualBlock";
import UndoArrow from "../UndoArrow/UndoArrow";
import Styles from "./CalculatorKit.module.scss";

const CalculatorKit = () => {
  const mode = useSelector((state) => state.constr.mode);
  if (mode === "Runtime") {
    return;
  } else {
    return (
      <div className={Styles.calculator}>
        <UndoArrow />
        <Display name="display" text="0" constraction />
        <OperatorBlock name="operator_block" constraction />
        <ButtonBlock name="button_block" constraction />
        <EqualBlock name="equal" constraction />
      </div>
    );
  }
};

export default CalculatorKit;
