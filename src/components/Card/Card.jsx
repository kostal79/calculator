import React from "react";
import CardHOC from "../../hocs/CardHOC";

const Card = ({ style, component, isOver, cardref, index }) => {
  return (
    <div ref={cardref} style={style}>
      {component}
    </div>
  );
};

export default CardHOC(Card);
