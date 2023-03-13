import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setDisplay,
  setOperator,
  setPreviosNumber,
} from "../../redux/slices/logicSlice";
import { calculate } from "../../utils/calculate/calculate";
import Styles from "./ButtonOperator.module.scss";

const ButtonOperator = ({ value }) => {
  const mode = useSelector((state) => state.constr.mode);
  const cursor = mode === "Runtime" && "pointer";
  const display = useSelector((state) => state.logic.display);
  const prevOperator = useSelector((state) => state.logic.operator);
  const dispatch = useDispatch();
  const previosNumber = useSelector((state) => state.logic.previosNumber);

  const handleOnClick = (operator) => {
    if (mode === "Runtime" && display !== "Не определено") {
      if (!prevOperator) {
        if (operator === "-" && parseFloat(display) === 0) {
          dispatch(setDisplay("-"));
        } else {
          dispatch(setPreviosNumber(display));
          dispatch(setOperator(operator));
          dispatch(setDisplay(operator))
        }
      } else if (prevOperator && previosNumber) {
        dispatch(setDisplay(operator));
        dispatch(setPreviosNumber(calculate(previosNumber, display, operator)))
        dispatch(setOperator(operator))
      } else {
        return
      }
    } else {
      return;
    }
  };

  return (
    <div
      className={Styles.button}
      style={{ cursor }}
      date-button-value={value}
      onClick={() => handleOnClick(value)}
    >
      {value}
    </div>
  );
};

export default ButtonOperator;
