import React from 'react';
import ButtonEqual from '../../UI/ButtonEqual/ButtonEqual';
import Display from '../../UI/Display/Display';
import ButtonBlock from '../ButtonBlock/ButtonBlock';
import OperatorBlock from '../OperatorBlock/OperatorBlock';
import Styles from "./CalculatorKit.module.scss"

const Calculator = () => {
    return (
      <div className={Styles.calculator}>
          <Display text={"0"}/>
          <OperatorBlock />
          <ButtonBlock />
          <ButtonEqual />
      </div>
    );
}

export default Calculator