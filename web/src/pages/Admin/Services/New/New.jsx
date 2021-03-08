import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./New.scss";
import { toast } from "react-toastify";

const New = ({ history }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [extras, setExtras] = useState("");

  const postNewService = async (e) => {
    e.preventDefault();
    let response = await fetch("/api/admin/service/new", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        description: description,
        extras: extras,
      }),
    }).catch((err) => {
      alert(err);
    });
  };

  return (
    <>
      <div className="new-service">
        <form>
          <input type="text" name="" id="" placeholder="Name" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Description"
          />
        </form>
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
