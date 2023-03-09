import React from 'react';
import Icon from "../../assets/droplogo.svg"
import Styles from "./DisactiveArea.module.scss"

const DisactiveArea = () => {
  return (
        <article className={Styles.droparea}>
          <img className={Styles.icon} src={Icon} alt="drop logo" />
          <h2 className={Styles.title}>Перетащите сюда</h2>
          <p className={Styles.text}>любой элемент из левой панели</p>
        </article>
  );
}

export default DisactiveArea