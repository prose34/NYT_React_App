import React from "react";

export const Container = ({ fluid, children }) =>
  <div className={`container${fluid ? "-fluid" : ""}`}>
    {children}
  </div>;



// WEBPACK FOOTER //
// ./src/components/Grid/Container.js