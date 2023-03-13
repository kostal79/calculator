import React from 'react';
import DropArea from '../DropArea/DropArea';
import Shifter from '../Shifter/Shifter';
import Styles from "./DropContainer.module.scss"

const DropContainer = () => {
    return (
      <div className={Styles.container}>
          <Shifter />
          <DropArea />
      </div>
    );
}

export default DropContainer