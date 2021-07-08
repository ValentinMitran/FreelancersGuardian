import React from "react";
import { Link } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <>
      <div className="landing-page">
        <Navbar />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
