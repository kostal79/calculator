import React from "react";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import {
  addDroped,
  addToBeginning,
  addToQueue,
} from "../redux/slices/dropSlice";
import { ItemTypes } from "../utils/itemTypes";

const DropAreaHOC = (OriginalComponent) => {
  return function NewComponent() {
    const activeMode = useSelector((state) => state.constr.mode);
    const droped = useSelector((state) => state.drop.droped);
    const dispatch = useDispatch();
    const isDroped = droped.length > 0 ? true : false;

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

    const ref = activeMode === "Constructor" ? drop : null;
    const backgroundColor = `${
      isOver ? "rgba(240, 249, 255, 1)" : "transparent"
    }`;

    return (
      <OriginalComponent
        arearef={ref}
        backgroundColor={backgroundColor}
        isDroped={isDroped}
      />
    );
  };
};

export default DropAreaHOC;
