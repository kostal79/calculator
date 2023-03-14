import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setDisplay,
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
    const previosNumber = useSelector((state) => state.logic.previosNumber)
  
    const numbersOnClick = (value) => {
      if (mode === "Runtime") {
        if (value === "Clear") {
          dispatch(setDisplay("0"));
          dispatch(setPreviosNumber(null));
          dispatch(setOperator(null));
        } else if (value === ",") {
          if (display === "0") {
            dispatch(setDisplay(`${display}${value}`));
          } else if (!["+", "-", "*", "/", "Не определено"].includes(display)){
            dispatch(
              setDisplay(display.includes(value) ? display : display + value)
            );
          } else {
            return
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

    const operatorOnClick = (currentOperator) => {
        if (mode === "Runtime" && display !== "Не определено") {
          if (!operator) {
            if (currentOperator === "-" && parseFloat(display) === 0) {
              dispatch(setDisplay("-"));
            } else {
              dispatch(setPreviosNumber(display));
              dispatch(setOperator(currentOperator));
              dispatch(setDisplay(currentOperator))
            }
          } else if (operator && previosNumber) {
            dispatch(setDisplay(currentOperator));
            dispatch(setPreviosNumber(calculate(previosNumber, display, currentOperator)))
            dispatch(setOperator(currentOperator))
          } else {
            return
          }
        } else {
          return;
        }
      };

      const equalOnClick = () => {
        if (
          !["+", "-", "*", "/"].includes(display) &&
          mode === "Runtime" &&
          previosNumber &&
          display &&
          operator
        ) {
          const ansver = calculate(previosNumber, display, operator);
          dispatch(setDisplay(ansver));
          dispatch(setOperator(null));
          dispatch(setPreviosNumber(null));
        }
        return;
      };



    return (
      <OriginalComponent
        value={value}
        cursor={cursor}
        numbersOnClick={() => numbersOnClick(value)}
        operatorOnClick={()=> operatorOnClick(value)}
        equalOnClick = {equalOnClick}
      />
    );
  }
  return NewComponent;
};

export default ButtonHOC;