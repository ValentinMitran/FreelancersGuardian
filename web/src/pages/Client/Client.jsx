import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import {
  MdKeyboardArrowRight,
  MdHome,
  MdMailOutline,
  MdDescription,
  MdRepeat,
  MdNotificationsNone,
  MdReceipt,
  MdHelp,
} from "react-icons/md";
import { ImRocket } from "react-icons/im";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Main from "../../components/Main/Main";

const Client = () => {
  return (
    <>
      <Topbar>
        <div className="logo-and-search">
          <img
            src="https://raw.githubusercontent.com/ValentinMitran/FreelancersGuardian/master/logo.png"
            alt="Logo"
            id="logo"
          />
          <NavLink to="/">FG</NavLink>
          <input type="text" placeholder="Search..." />
        </div>
        <div className="user-area">
          <MdMailOutline />
          <MdNotificationsNone />
          <img
            src="https://uifaces.co/our-content/donated/N5PLzyan.jpg"
            alt=""
          />
        </div>
      </Topbar>
      <Sidebar>
        <NavLink exact to="/" activeClassName="active">
          <MdHome id="left" />
          Dashboard
          <MdKeyboardArrowRight id="right" />
        </NavLink>
        <NavLink to="/messages" activeClassName="active">
          <MdMailOutline id="left" />
          Messages
          <MdKeyboardArrowRight id="right" />
        </NavLink>
        <NavLink to="/projects" activeClassName="active">
          <ImRocket id="left" />
          Projects
          <MdKeyboardArrowRight id="right" />
        </NavLink>
        <NavLink to="/invoices" activeClassName="active">
          <MdDescription id="left" />
          Invoices
          <MdKeyboardArrowRight id="right" />
        </NavLink>
        <NavLink to="/estimates" activeClassName="active">
          <MdReceipt id="left" />
          Estimates
          <MdKeyboardArrowRight id="right" />
        </NavLink>
        <NavLink to="/subscriptions" activeClassName="active">
          <MdRepeat id="left" />
          Subscriptions
          <MdKeyboardArrowRight id="right" />
        </NavLink>
        <NavLink to="/tickets" activeClassName="active">
          <MdHelp id="left" />
          Tickets
          <MdKeyboardArrowRight id="right" />
        </NavLink>
      </Sidebar>
      <Main>
        <Switch>
          <Route exact path="/">
            Dashboard
          </Route>
          <Route path="/messages">Messages</Route>
          <Route path="/projects">Projects</Route>
          <Route path="/clients">Clients</Route>
          <Route path="/invoices">Invoices</Route>
          <Route path="/estimates">Estimates</Route>
          <Route path="/subscriptions">Subscriptions</Route>
          <Route path="/tickets">Tickets</Route>
        </Switch>
      </Main>
    </>
  );
};

export default Client;
