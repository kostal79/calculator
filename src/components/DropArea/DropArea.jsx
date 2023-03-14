import React from "react";
import Banner from "../Banner/Banner";
import DropCells from "../DropCells/DropCells";
import DropAreaHOC from "../../hocs/DropAreaHOC";
import Styles from "./DropArea.module.scss";

const DropArea = ({ arearef, backgroundColor, isDroped }) => {
  return (
    <div className={Styles.droparea} ref={arearef} style={{ backgroundColor }}>
      {isDroped ? <DropCells /> : <Banner />}
    </div>
  );
};

export default DropAreaHOC(DropArea);
