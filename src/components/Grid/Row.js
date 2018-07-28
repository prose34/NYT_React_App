import React from "react";

export const Row = ({ fluid, children }) =>
  <div className={`row${fluid ? "-fluid" : ""}`}>
    {children}
  </div>;



// WEBPACK FOOTER //
// ./src/components/Grid/Row.js