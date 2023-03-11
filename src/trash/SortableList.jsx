import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const ItemTypes = {
  CARD: 'card',
};

const SortableList = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
  ]);

  const moveItem = (dragIndex, hoverIndex) => {
    const draggedItem = items[dragIndex];
    setItems(prevItems => {
      const itemsCopy = [...prevItems];
      itemsCopy.splice(dragIndex, 1);
      itemsCopy.splice(hoverIndex, 0, draggedItem);
      return itemsCopy;
    });
  };

  const Card = ({ id, text, index }) => {
    const [{ isDragging }, drag] = useDrag({
      item: { type: ItemTypes.CARD, id, index },
      type: ItemTypes.CARD, // <-- Add this line
      collect: monitor => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const [{ canDrop, isOver }, drop] = useDrop({
      accept: ItemTypes.CARD,
      drop: (item, monitor) => {
        const dragIndex = item.index;
        const hoverIndex = index;

        if (dragIndex === hoverIndex) {
          return;
        }

        moveItem(dragIndex, hoverIndex);
        item.index = hoverIndex;
      },
      collect: monitor => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    });

    const opacity = isDragging ? 0.5 : 1;
    const backgroundColor = isOver && canDrop ? 'lightgray' : 'white';

    return (
      <div
        ref={node => drag(drop(node))}
        style={{ opacity, backgroundColor }}
      >
        {text}
      </div>
    );
  };

  return (
    <div>
      {items.map((item, index) => (
        <Card
          key={item.id}
          id={item.id}
          text={item.text}
          index={index}
        />
      ))}
    </div>
  );
};

export default SortableList;
