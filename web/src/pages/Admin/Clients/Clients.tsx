import React, { useState, useEffect } from "react";
import "./Clients.scss";

const Clients = () => {
  const [clients, setClients] = useState<any>([]);

  const getClients = async () => {
    let response = await fetch("/api/admin/clients/getClients", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authToken: localStorage.authToken,
      },
    }).catch((err): any => {
      alert(err);
    });
    const data = await response.json();
    setClients(data);
  };

  useEffect(() => {
    getClients();
  }, []);

  return (
    <>
      <div className="clients">
        Clients Section
        {clients.map((x: any) => (
          <div>{x.username}</div>
        ))}
      </div>
    </>
  );
};

export default Clients;
