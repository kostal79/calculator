import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { popQueue, undoDroped } from "../redux/slices/dropSlice";

const UndoHOC = (OriginalComponent) => {
  function NewComponent() {
    const mode = useSelector((state) => state.constr.mode);
    const droped = useSelector((state) => state.drop.droped);
    const queue = useSelector((state) => state.drop.queue);
    const dispatch = useDispatch();
    const active = mode === "Constructor" && droped.length > 0;

    const onClick = () => {
      const lastElement = queue.at(-1);
      dispatch(undoDroped(lastElement));
      dispatch(popQueue(lastElement));
    };
    return <OriginalComponent onClick={onClick} active={active}/>;
  }
  return NewComponent;
};

export default UndoHOC;
