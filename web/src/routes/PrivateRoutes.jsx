import React, { useEffect, useState } from "react";
import Admin from "../pages/Admin/Admin";
import Client from "../pages/Client/Client";
import LandingPage from "./../pages/LandingPage/LandingPage";

const PrivateRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    verifyLoggedIn();
  }, []);

  const verifyLoggedIn = async () => {
    let response = await fetch("/api/user/isLoggedIn", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authToken: localStorage.authToken,
      },
    }).catch((err) => {
      alert(err);
    });
    if (response.ok === true) {
      setIsLoggedIn(true);
      response = await response.text();
      setRole(response);
    } else {
      localStorage.clear();
      setIsLoggedIn(false);
    }
    setLoading(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {isLoggedIn ? role === "admin" ? <Admin /> : <Client /> : <LandingPage />}
    </>
  );
};

export default PrivateRoutes;
