import React from "react";
import Icon from "../../assets/droplogo.svg"
import Styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <div className={Styles.banner}>
      <img className={Styles.icon} src={Icon} alt="drop logo" />
      <h2 className={Styles.title}>Перетащите сюда</h2>
      <p className={Styles.text}>любой элемент<br/> из левой панели</p>
    </div>
  );
};

export default Banner;
