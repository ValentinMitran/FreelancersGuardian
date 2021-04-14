import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./View.scss";

const View = ({ history }) => {
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
        <div onClick={() => history.push(`/services/edit/${x._id}`)}>
          {x.name}
        </div>
      ))}
    </div>
  );
};

export default withRouter(View);
