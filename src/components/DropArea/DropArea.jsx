import React from 'react';
import DisactiveArea from '../DisactiveArea/DisactiveArea';
import Shifter from '../Shifter/Shifter';
import Styles from "./DropArea.module.scss"

const DropArea = () => {
    return (
      <div className={Styles.container}>
          <Shifter />
          <DisactiveArea />
      </div>
    );
}

export default DropArea