import React from "react";
import "./Sidebar.scss";

const Sidebar = ({ children }: any) => {
  return (
    <>
      <div className="sidebar">{children}</div>
    </>
  );
};
export default Sidebar;
