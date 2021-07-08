import React, { useEffect, useState } from "react";
import "./Edit.scss";

const Edit = (props: any) => {
  const [data, setData] = useState([]);

  const submitEdit = async () => {
    console.log("submited");
  };

  const getData = async () => {
    console.log("got data");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>Edit</div>
    </div>
  );
};

export default Edit;
