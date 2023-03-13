import React from "react";
import ButtonOperator from "../ButtonOperator/ButtonOperator";
import DragHOC from "../DragHOC/DragHOC";
import Styles from "./OperatorBlock.module.scss";

const OperatorBlock = ({ drag, opacity, inactive }) => {
  const operators = ["/", "*", "-", "+"];
  const cursor = !inactive && "grab"
  const pointerEvents = inactive && "none";
  const operatorsButtons = operators.map((operator) => (
    <ButtonOperator value={operator} key={operator} />
  ));

  return (
    <div
      className={Styles.operators}
      ref={drag ? drag : null}
      style={{ opacity, pointerEvents, cursor }}
    >
      {operatorsButtons}
    </div>
  );
};

export default DragHOC(OperatorBlock);
