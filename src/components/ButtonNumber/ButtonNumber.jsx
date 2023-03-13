import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setDisplay,
  setOperator,
  setPreviosNumber,
} from "../../redux/slices/logicSlice";
import Styles from "./ButtonNumber.module.scss";

const ButtonNumber = ({ value }) => {
  const mode = useSelector((state) => state.constr.mode);
  const display = useSelector((state) => state.logic.display);
  const dispatch = useDispatch();
  const cursor = mode === "Runtime" && "pointer";
  const operator = useSelector((state) => state.logic.operator);
  const previosNumber = useSelector((state) => state.logic.previosNumber)

  const onClick = (value) => {
    if (mode === "Runtime") {
      if (value === "Clear") {
        dispatch(setDisplay("0"));
        dispatch(setPreviosNumber(null));
        dispatch(setOperator(null));
      } else if (value === ",") {
        if (display === "0") {
          dispatch(setDisplay(`${display}${value}`));
        } else {
          dispatch(
            setDisplay(display.includes(value) ? display : display + value)
          );
        }
      } else {
        if (["0", "+", "-", "*", "/", "Не определено"].includes(display)) {
          if (!operator && !previosNumber && display === "-") {
            dispatch(setDisplay(display + String(value)));
          } else {
            dispatch(setDisplay(String(value)));
          }
        } else {
          dispatch(
            display.length < 16 ? setDisplay(display + String(value)) : display
          );
        }
      }
    }
  };

  return (
    <div
      className={Styles.button}
      style={{ cursor }}
      data-button-value={value}
      onClick={() => onClick(value)}
    >
      {value}
    </div>
  );
};

export default ButtonNumber;
