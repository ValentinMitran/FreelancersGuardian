import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./New.scss";
import { toast } from "react-toastify";

const New = ({ history }: any) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(1);
  const [extras, setExtras] = useState<any>([]);

  const postNewService = async (e: any) => {
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
    }).catch((err): any => {
      alert(err);
    });
    if (response.ok) {
      toast.success("Worked");
    }
  };

  const handleChange = (e, indexItem) => {
    let updatedList = extras.map((item, index) => {
      if (index === indexItem) {
        return { ...item, [e.target.name]: e.target.value };
      }
      return item;
    });

    setExtras(updatedList);
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
            onChange={(e: any) => setName(e.target.value)}
          />
          <textarea
            name="description"
            id=""
            cols={30}
            rows={10}
            placeholder="Description"
            value={description}
            onChange={(e: any) => setDescription(e.target.value)}
          />
          <input
            type="number"
            name="price"
            id=""
            min="1"
            value={price}
            onChange={(e: any) => setPrice(e.target.value)}
          />
        </form>
        <span
          onClick={() =>
            setExtras((prevExtras) => [...prevExtras, { name: "", price: "" }])
          }
        >
          Add-ons +
        </span>
        {extras.map((x, index) => (
          <>
            <br />
            <input
              type="text"
              placeholder="name"
              name="name"
              value={x.name}
              onChange={(e) => handleChange(e, index)}
            />
            <input
              type="number"
              name="price"
              id=""
              placeholder="price"
              value={x.price}
              onChange={(e) => handleChange(e, index)}
            />
          </>
        ))}

        <div className="actions">
          <button type="submit">Reset</button>
          <button type="submit" onClick={(e) => postNewService(e)}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default withRouter(New);
