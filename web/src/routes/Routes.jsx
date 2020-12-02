import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/">
              LandingPage
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
