import React from "react";

export const Col = ({ size, children }) =>
  <div className={size.split(" ").map(size => "col-" + size).join(" ")}>
    {children}
  </div>;



// WEBPACK FOOTER //
// ./src/components/Grid/Col.js