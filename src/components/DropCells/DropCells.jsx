import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Display from "../../UI/Display/Display";
import ButtonBlock from "../ButtonBlock/ButtonBlock";
import ButtonEqual from "../../UI/ButtonEqual/ButtonEqual";
import OperatorBlock from "../OperatorBlock/OperatorBlock";
import Styles from "./DropCells.module.scss";
import { ItemTypes } from "../../utils/itemTypes";
import { setDropList } from "../../redux/slices/dropSlice";
import { useDrag, useDrop } from "react-dnd";

const DropCells = () => {
  const components = {
    display: <Display />,
    button_block: <ButtonBlock />,
    equal: <ButtonEqual />,
    operator_block: <OperatorBlock />,
  };

  const mode = useSelector((state) => state.constr.mode);
  const items = useSelector((state) => state.drop.droped);
  const dispatch = useDispatch();

  const moveItem = (dragIndex, hoverIndex) => {
    const draggedItem = items[dragIndex];
    const itemsCopy = [...items];
    itemsCopy.splice(dragIndex, 1);
    itemsCopy.splice(hoverIndex, 0, draggedItem);
    dispatch(setDropList(itemsCopy));
  };

  const Card = ({ name, component, index }) => {
    const [{ isDragging }, drag] = useDrag({
      item: { name, index },
      type: name === "display" ? ItemTypes.FIXED : ItemTypes.SLIDE,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const [{ canDrop, isOver }, drop] = useDrop({
      accept: ItemTypes.SLIDE,
      drop: (item, monitor) => {
        const dragIndex = item.index;
        const hoverIndex = index;

        if (dragIndex === hoverIndex) {
          return;
        }

        moveItem(dragIndex, hoverIndex);
        item.index = hoverIndex;
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    });

    const opacity = isDragging ? 0.5 : 1;
    const backgroundColor = isOver && canDrop ? "lightgray" : "white";

    return (
      <div
        ref={mode === "Constructor" ? (node) => drag(drop(node)) : null}
        style={{ opacity, backgroundColor }}
      >
        {component}
      </div>
    );
  };

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
