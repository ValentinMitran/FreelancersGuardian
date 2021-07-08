import React from "react";
import "./Main.scss";

const Main = ({ children }: any) => {
  return (
    <>
      <div className="main">{children}</div>
    </>
  );
};

export default Main;
