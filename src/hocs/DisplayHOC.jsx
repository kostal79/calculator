import React from "react";

const DisplayHOC = (OriginalComponent) => {
  return function NewComponent() {
    return <OriginalComponent />;
  }
};

export default DisplayHOC;
