import React from 'react';
import Styles from "./Display.module.scss"

const Display = ({text}) => {
    return (
      <div className={Styles.container} >
          <div className={Styles.display}>
            {text}
          </div>
      </div>
    );
}

export default Display