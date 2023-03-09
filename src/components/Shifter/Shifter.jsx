import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../../redux/slices/constructorSlice";
import Styles from "./Shifter.module.scss";
import { ReactComponent as Eye } from "../../assets/eye.svg";
import  { ReactComponent as Selector} from "../../assets/selector.svg";

const Shifter = () => {
  const activeMode = useSelector((state) => state.constr.mode);
  console.log(activeMode);
  const dispatch = useDispatch();

  return (
    <div className={Styles.container}>
      <div
        className={Styles.shift}
        style={{
          width: activeMode === "Runtime" ? "47%" : "56%",
          transform:
            activeMode === "Runtime" ? "translateX(0)" : "translateX(77.5%)",
        }}
      >
        <div
          className={Styles.icon}
        >
          {activeMode === "Runtime" ? <Eye /> : <Selector />}
        </div>
        <p className={Styles.text}>{activeMode}</p>
      </div>
      <div
        className={Styles.runtime}
        onClick={() => dispatch(setMode("Runtime"))}
      >
        <Eye />
        <p className={Styles.text}>Runtime</p>
      </div>
      <div
        className={Styles.constructor}
        onClick={() => dispatch(setMode("Constructor"))}
      >
        <Selector />
        <p className={Styles.text}>Constructor</p>
      </div>
    </div>
  );
};

export default Shifter;
