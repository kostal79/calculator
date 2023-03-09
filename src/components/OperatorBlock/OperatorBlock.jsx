import React from 'react';
import ButtonOperator from '../../UI/ButtonOperator/ButtonOperator';
import Styles from "./OperatorBlock.module.scss"

const OperatorBlock = () => {
  const operators = ["/", "*", "-", "+"]
  const operatorsButtons = operators.map((operator) => <ButtonOperator value={operator} key={operator}/>)
    return (
      <div className={Styles.operators}>
          {operatorsButtons}
      </div>
    );
}

export default OperatorBlock