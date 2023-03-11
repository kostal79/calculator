import React from "react";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";
import { ItemTypes } from "../../utils/itemTypes";

const DragHOC = (OriginalComponent) => {
  function NewComponent({ name, text, constraction }) {
    const activeMode = useSelector((state) => state.constr.mode);
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
        drag={(activeMode === "Constructor") && constraction && drag}
        text={text}
      />
    );
  }
  return NewComponent;
};

export default DragHOC;
