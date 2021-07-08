import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";
import PrivateRoutes from "./PrivateRoutes";
toast.configure();

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/">
            <PrivateRoutes />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
