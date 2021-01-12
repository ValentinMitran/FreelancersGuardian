import React, { useState, useEffect } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import "./Auth.scss";
import { toast } from "react-toastify";

function RegisterPage({ history }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localStorage.authToken ? setIsLoggedIn(true) : setIsLoading(false);
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();

    let response = await fetch("/api/user/register", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).catch((err) => {
      alert(err);
    });
    response = await response.text();
    if (response === "Success") {
      toast.success("Registration Successful");
      history.push("/login");
    } else {
      toast.error(response);
      setUsername("");
      setPassword("");
    }
  };

  if (isLoading) {
    return (
      <>
        Loading...
        {isLoggedIn ? <Redirect to="/" /> : null}
      </>
    );
  }

  return (
    <>
      <div className="auth-page">
        <div className="auth-wrapper">
          <form onSubmit={submitForm}>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username..."
            />
            <input
              required
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password..."
            />
            <button type="submit">Register</button>
          </form>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </>
  );
}

export default withRouter(RegisterPage);
