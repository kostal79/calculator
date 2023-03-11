import React from "react";
import ButtonEqual from "../../UI/ButtonEqual/ButtonEqual";
import Display from "../../UI/Display/Display";
import ButtonBlock from "../ButtonBlock/ButtonBlock";
import OperatorBlock from "../OperatorBlock/OperatorBlock";
import Styles from "./CalculatorKit.module.scss";

const CalculatorKit = () => {
  return (
    <div className={Styles.calculator}>
      <Display name="display" text="0" constraction />
      <OperatorBlock name="operator_block" constraction />
      <ButtonBlock name="button_block" constraction />
      <ButtonEqual name="equal" constraction />
    </div>
  );
};

export default CalculatorKit;
