import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonBlock from "../ButtonBlock/ButtonBlock";
import OperatorBlock from "../OperatorBlock/OperatorBlock";
import { ItemTypes } from "../../utils/itemTypes";
import { setDropList } from "../../redux/slices/dropSlice";
import { useDrag, useDrop } from "react-dnd";
import { ReactComponent as MarkLine } from "../../assets/marker.svg";
import Display from "../Display/Display";
import Styles from "./DropCells.module.scss";
import ButtonEqual from "../ButtonEqual/ButtonEqual";

const DropCells = () => {
  const mode = useSelector((state) => state.constr.mode);
  const items = useSelector((state) => state.drop.droped);
  const dispatch = useDispatch();
  const text = useSelector((state) => state.logic.display)

  const components = {
    display: <Display text={text}/>,
    button_block: <ButtonBlock />,
    equal: <ButtonEqual />,
    operator_block: <OperatorBlock />,
  };


  const moveItem = (dragIndex, hoverIndex) => {
    if (dragIndex === 0) {
      return;
    } else if (hoverIndex === 0) {
      const draggedItem = items[dragIndex];
      const itemsCopy = [...items];
      itemsCopy.splice(dragIndex, 1);
      itemsCopy.splice(1, 0, draggedItem);
      dispatch(setDropList(itemsCopy));
    } else {
      const draggedItem = items[dragIndex];
      const itemsCopy = [...items];
      itemsCopy.splice(dragIndex, 1);
      itemsCopy.splice(hoverIndex, 0, draggedItem);
      dispatch(setDropList(itemsCopy));
    }
  };

  const Card = ({ name, component, index }) => {
    const [{ isDragging }, drag] = useDrag({
      item: { name, index },
      type: name === "display" ? ItemTypes.FIXED : ItemTypes.SLIDE,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const [{ isOver }, drop] = useDrop({
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
      }),
    });

    const opacity = isDragging ? 0.5 : 1;
    const cursor = name === "display" ? "not-allowed" : "grab";

    return (
      <>
        {isOver && name !== "display" && index !== 3 && <MarkLine />}
        <div
          ref={mode === "Constructor" ? (node) => drag(drop(node)) : null}
          style={{ opacity, cursor }}
        >
          {component}
        </div>
        {isOver && (name === "display" || index === 3) && <MarkLine />}
      </>
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
