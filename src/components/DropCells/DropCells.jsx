import React from "react";
import { useSelector } from "react-redux";
import Styles from "./DropCells.module.scss";
import { Components } from "../../utils/components";
import Card from "../Card/Card";

const DropCells = () => {
  const items = useSelector((state) => state.drop.droped);
  const components = Components();

  return (
    <div className={Styles.container}>
      {items.map((item, index) => (
        <Card
          key={item + item}
          name={item}
          component={components[item]}
          index={index}
        />
      ))}
    </div>
  );
};
export default DropCells;
