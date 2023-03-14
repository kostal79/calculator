

export const MoveItem = (dragIndex, hoverIndex, items, setItems) => {
  if (items[dragIndex] === "display") {
    return;
  } else if (items[hoverIndex] === "display") {
    const draggedItem = items[dragIndex];
    const itemsCopy = [...items];
    itemsCopy.splice(dragIndex, 1);
    itemsCopy.splice(1, 0, draggedItem);
    setItems(itemsCopy);
  } else {
    const draggedItem = items[dragIndex];
    const itemsCopy = [...items];
    itemsCopy.splice(dragIndex, 1);
    itemsCopy.splice(hoverIndex, 0, draggedItem);
    setItems(itemsCopy);
  }
}