import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Edit from "./Edit/Edit";
import New from "./New/New";
import "./Services.scss";
import View from "./View/View";

const Services = () => {
  let { path, url } = useRouteMatch();

  return (
    <>
      <div className="services">
        <Switch>
          <Route exact path={path}>
            <View />
          </Route>
          <Route path={`${path}/new`}>
            <New />
          </Route>
          <Route path={`${path}/edit/:topicId`}>
            <Edit />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default Services;
