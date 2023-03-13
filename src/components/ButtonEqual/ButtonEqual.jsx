import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DragHOC from "../../components/DragHOC/DragHOC";
import {
  setDisplay,
  setOperator,
  setPreviosNumber,
} from "../../redux/slices/logicSlice";
import { calculate } from "../../utils/calculate/calculate";
import Styles from "./ButtonEqual.module.scss";

const ButtonEqual = ({ drag, opacity, inactive }) => {
  const pointerEvents = inactive && "none";
  const cursor = !inactive && "grab";
  const mode = useSelector((state) => state.constr.mode);
  const cursorButton = mode === "Runtime" && "pointer";
  const previosNumber = useSelector((state) => state.logic.previosNumber);
  const display = useSelector((state) => state.logic.display);
  const operator = useSelector((state) => state.logic.operator);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    if (!["+", "-", "*", "/"].includes(display) && mode === "Runtime") {
      const ansver = calculate(previosNumber, display, operator);
      dispatch(setDisplay(ansver));
      dispatch(setOperator(null));
      dispatch(setPreviosNumber(null));
    }
    return;
  };

  return (
    <div
      className={Styles.container}
      ref={drag ? drag : null}
      style={{ cursor, pointerEvents, opacity }}
    >
      <div
        className={Styles.button}
        data-button-value={"="}
        style={{ cursor: cursorButton }}
        onClick={() => handleOnClick()}
      >
        =
      </div>
    </div>
  );
};

export default DragHOC(ButtonEqual);
