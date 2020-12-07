import React from "react";
import "./Sidebar.scss";

const Sidebar = ({ children }) => {
  return (
    <>
      <div className="sidebar">{children}</div>
    </>
  );
};
export default Sidebar;
