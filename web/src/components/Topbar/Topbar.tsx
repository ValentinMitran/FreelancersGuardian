import React from "react";
import "./Topbar.scss";

const Topbar = ({ children }: any) => {
  return (
    <>
      <div className="topbar">{children}</div>
    </>
  );
};

export default Topbar;
