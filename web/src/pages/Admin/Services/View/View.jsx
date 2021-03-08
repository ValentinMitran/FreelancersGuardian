import React, { useState, useEffect } from "react";
import "./View.scss";

const View = () => {
  const [services, setServices] = useState([]);

  const getServices = async () => {
    let response = await fetch("/api/admin/service/", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        authToken: localStorage.authToken,
      },
    }).catch((err) => {
      alert(err);
    });
    if (response.ok) {
      setServices(await response.json());
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <div>
      <h3>Dashboard edit services.</h3>
      {services.map((x) => (
        <div>{x.name}</div>
      ))}
    </div>
  );
};

export default View;
