import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./New.scss";
import { toast } from "react-toastify";

const New = ({ history }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(1);
  const [extras, setExtras] = useState([
    {
      name: "Revisions",
      price: "10",
    },
    {
      name: "Pages",
      price: "10",
    },
  ]);

  const postNewService = async (e) => {
    e.preventDefault();
    let response = await fetch("/api/admin/service/new", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
        authToken: localStorage.authToken,
      },
      body: JSON.stringify({
        name: name,
        description: description,
        price: price,
        extras: extras,
      }),
    }).catch((err) => {
      alert(err);
    });
    if (response.ok) {
      alert("worked");
    }
  };

  return (
    <>
      <div className="new-service">
        <form>
          <input
            type="text"
            name="name"
            id=""
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            name="description"
            id=""
            cols="30"
            rows="10"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            name="price"
            id=""
            min="1"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </form>
        Add-ons +
        <br />
        <input type="text" placeholder="name" />
        <input type="number" name="" id="" placeholder="price" />
        <br />
        <input type="text" placeholder="name" />
        <input type="number" name="" id="" placeholder="price" />
        <br />
        <input type="text" placeholder="name" />
        <input type="number" name="" id="" placeholder="price" />
        <div className="actions">
          <button type="submit">Reset</button>
          <button type="submit" onClick={postNewService}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default withRouter(New);
