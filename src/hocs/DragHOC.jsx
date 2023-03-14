import React from "react";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";
import { ItemTypes } from "../utils/itemTypes";

const DragHOC = (OriginalComponent) => {
  function NewComponent({ name, text, constraction }) {
    const activeMode = useSelector((state) => state.constr.mode);
    const dropList = useSelector((state) => state.drop.droped);
    const opacity = dropList.includes(name) ? ".4" : "1";
    const inactive = !dropList.includes(name) ? false : true;

    // eslint-disable-next-line
    const [{ isDragging }, drag] = useDrag(() => ({
      type: ItemTypes.CARD,
      item: { name: name },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }));

    return (
      <OriginalComponent
        drag={activeMode === "Constructor" && constraction && drag}
        text={text}
        opacity={opacity}
        inactive={inactive}
      />
    );
  }
  return NewComponent;
};

export default DragHOC;
