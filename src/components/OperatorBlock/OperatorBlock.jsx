import React from "react";
import ButtonOperator from "../../UI/ButtonOperator/ButtonOperator";
import DragHOC from "../DragHOC/DragHOC";
import Styles from "./OperatorBlock.module.scss";

const OperatorBlock = ({ drag }) => {
  const operators = ["/", "*", "-", "+"];
  const operatorsButtons = operators.map((operator) => (
    <ButtonOperator value={operator} key={operator} />
  ));

  return (
    <div className={Styles.operators} ref={drag ? drag : null}>
      {operatorsButtons}
    </div>
  );
};

export default DragHOC(OperatorBlock);
