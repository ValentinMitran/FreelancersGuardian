import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <header>
        <img
          src="https://github.com/ValentinMitran/FreelancersGuardian/raw/master/logo.png"
          alt=""
        />
        <nav>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <Link to="/login" id="login">
            Login
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
