import React from "react";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { addDroped, addToBeginning, addToQueue } from "../../redux/slices/dropSlice";

import Banner from "../Banner/Banner";
import { ItemTypes } from "../../utils/itemTypes";
import DropCells from "../DropCells/DropCells";
import Styles from "./DisactiveArea.module.scss";

const DisactiveArea = () => {
  const activeMode = useSelector((state) => state.constr.mode);
  const droped = useSelector((state) => state.drop.droped);
  const dispatch = useDispatch();

  function addElement(name) {
    if (name === "display") {
      dispatch(addToBeginning(name));
      dispatch(addToQueue(name));
    } else {
      dispatch(addDroped(name));
      dispatch(addToQueue(name));
    }
  }

  const [{ isOver }, drop] = useDrop(() => ({
    accept: [ItemTypes.CARD],
    drop: (item) => addElement(item.name),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      className={Styles.droparea}
      ref={activeMode === "Constructor" ? drop : null}
      style={{
        backgroundColor: `${isOver ? "rgba(240, 249, 255, 1)" : "transparent"}`,
      }}
    >
      {droped.length > 0 ? <DropCells /> : <Banner />}
    </div>
  );
};

export default DisactiveArea;
