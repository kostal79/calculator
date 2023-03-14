import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setDisplay,
  setIsNewNumber,
  setOperator,
  setPreviosNumber,
} from "../redux/slices/logicSlice";
import { calculate } from "../utils/calculate/calculate";

const ButtonHOC = (OriginalComponent) => {
  function NewComponent({ value }) {
    const mode = useSelector((state) => state.constr.mode);
    const display = useSelector((state) => state.logic.display);
    const dispatch = useDispatch();
    const cursor = mode === "Runtime" && "pointer";
    const operator = useSelector((state) => state.logic.operator);
    const previosNumber = useSelector((state) => state.logic.previosNumber);
    const isNewNumber = useSelector((state) => state.logic.isNewNumber);

    const numbersOnClick = (value) => {
      value = String(value);
      if (mode === "Runtime") {
        if (value === "Clear") {
          dispatch(setDisplay("0"));
          dispatch(setPreviosNumber(null));
          dispatch(setOperator(null));
          dispatch(setIsNewNumber(true));
        } else if (isNewNumber) {
          if (value === ",") {
            dispatch(setDisplay("0,"));
            dispatch(setIsNewNumber(false));
          } else {
            dispatch(setDisplay(value));
            dispatch(setIsNewNumber(false));
          }
        } else if (!isNewNumber && display.length < 16) {
          if (value === ",") {
            dispatch(
              setDisplay(display.includes(",") ? display : display + value)
            );
          } else {
            dispatch(setDisplay(display + value));
          }
        }
      }
    };

    const operatorOnClick = (currentOperator) => {
      if (mode === "Runtime" && display !== "Не определено") {
        if (!operator && currentOperator === "-" && display === "0") {
          dispatch(setDisplay("-"));
          dispatch(setIsNewNumber(false));
        }
        if (!operator || operator === "=")  {
          dispatch(setOperator(currentOperator));
          dispatch(setPreviosNumber(display));
          dispatch(setIsNewNumber(true));
        } else if (!isNewNumber) {
          const localAnsver = calculate(
            previosNumber,
            display,
            operator
          );
          dispatch(setPreviosNumber(localAnsver));
          dispatch(setOperator(currentOperator));
          dispatch(setDisplay(localAnsver));
          dispatch(setIsNewNumber(true));
        }
      }
    };

    const equalOnClick = () => {
      if (
        mode === "Runtime" &&
        previosNumber &&
        display !== "He определено" &&
        operator
      ) {
        const finalAnsver = calculate(previosNumber, display, operator);
        dispatch(setDisplay(finalAnsver));
        dispatch(setOperator("="));
        dispatch(setPreviosNumber(null));
        dispatch(setIsNewNumber(true))
      }
      return;
    };

    return (
      <OriginalComponent
        value={value}
        cursor={cursor}
        numbersOnClick={() => numbersOnClick(value)}
        operatorOnClick={() => operatorOnClick(value)}
        equalOnClick={equalOnClick}
      />
    );
  }
  return NewComponent;
};

export default ButtonHOC;
