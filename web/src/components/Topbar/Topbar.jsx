import React from "react";
import "./Topbar.scss";

const Topbar = ({ children }) => {
  return (
    <>
      <div className="topbar">{children}</div>
    </>
  );
};

export default Topbar;
