import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Auth.scss";
import { toast } from "react-toastify";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localStorage.authToken ? setIsLoggedIn(true) : setIsLoading(false);
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();

    let response = await fetch("/api/user/login", {
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
    if (response.headers.get("authToken")) {
      localStorage.authToken = response.headers.get("authToken");
      toast.success("Logged in succesfully");
      setIsLoggedIn(true);
    } else {
      toast.error("Username/Password combination doesn't exist.");
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
      {isLoggedIn ? <Redirect to="/" /> : null}
      <div className="auth-page">
        <div className="auth-wrapper">
          <form onSubmit={submitForm}>
            <input
              required
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
            <button type="submit">Login</button>
          </form>
          <Link to="/register">REGISTER</Link>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
