import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import New from "./New/New";
import "./Services.scss";

const Services = () => {
  let { path, url } = useRouteMatch();

  return (
    <>
      <div className="services">
        Services Section
        <Switch>
          <Route exact path={path}>
            <h3>Dashboard edit services.</h3>
          </Route>
          <Route path={`${path}/new`}>
            <New />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default Services;
