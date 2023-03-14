import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { setDropList } from "../redux/slices/dropSlice";
import { ItemTypes } from "../utils/itemTypes";
import { MoveItem } from "../utils/MoveItem";

const CardHOC = (OriginalComponent) => {
  return function NewComponent({ name, component, index }) {
    const mode = useSelector((state) => state.constr.mode);
    const items = useSelector((state) => state.drop.droped);
    const dispatch = useDispatch();
    const text = useSelector((state) => state.logic.display);

    const [{ isDragging }, drag] = useDrag({
      item: { name, index },
      type: name === "display" ? ItemTypes.FIXED : ItemTypes.SLIDE,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const handleDrop = (item, monitor) => {
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      MoveItem(dragIndex, hoverIndex, items, (itemsCopy) =>
        dispatch(setDropList(itemsCopy))
      );

      item.index = hoverIndex;
    };

    const [{ isOver }, drop] = useDrop({
      accept: ItemTypes.SLIDE,
      drop: (item, monitor) => handleDrop(item, monitor),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    });

    const opacity = isDragging ? 0.5 : 1;
    const cursor = name === "display" ? "not-allowed" : "grab";
    const style = { opacity, cursor };
    const ref = mode === "Constructor" ? (node) => drag(drop(node)) : null;

    return (
      <OriginalComponent
        cardref={ref}
        style={style}
        component={component}
        isOver={isOver}
        index={index}
      />
    );
  };
};

export default CardHOC;
