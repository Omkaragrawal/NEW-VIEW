import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Login.css";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState();
  const getUsername = (e) => {
    let str = e.target.value;
    setUsername(str);
  };
  const getPassword = (e) => {
    let str = e.target.value;
    setPassword(str);
  };
  const login = () => {
    axios
      .post(
        "http://localhost:8081/users/login",
        {
          username: username,
          password: password,
        },
        { withCredentials: true }
      )
      .then(
        (res) => (
          console.log(res),
          typeof res !== undefined && res.data.status === true
            ? setRedirect(true)
            : setRedirect(false)
        )
      )
      .catch((err) => console.log("Err"));
  };

  const login__facebook = () => {
    // Configure the ONCLICK
  };
  const login__google = () => {
    // Configure the ONCLICK
  };
  const login__twitter = () => {
    // Configure the ONCLICK
  };
  const login__github = () => {
    // Configure the ONCLICK
  };
  return (
    <div className="login">
      <div className="login__space">
        <p className="login__header">Login</p>
        <div className="login__components">
          <form>
            {redirect === false && (
              <span
                style={{
                  marginBottom: "40px",
                  color: "red",
                }}
              >
                Wrong username or password
              </span>
            )}
            <p className="login__line1">
              Username or Email{" "}
              {redirect === false && (
                <span
                  style={{
                    marginBottom: "40px",
                    color: "red",
                  }}
                >
                  *
                </span>
              )}
            </p>
            <input
              type="email"
              className="login__input"
              placeholder="Email or Username"
              onChange={getUsername}
              label="email"
              value={username}
            />
            <p className="login__line2">
              Password{" "}
              {redirect === false && (
                <span
                  style={{
                    marginBottom: "40px",
                    color: "red",
                  }}
                >
                  *
                </span>
              )}
            </p>
            <input
              value={password}
              label="password"
              type="password"
              className="login__input"
              placeholder="Password"
              onChange={getPassword}
              onClick={login}
            />

            <div className="login__button">
              <button
                className="login__submit"
                style={
                  redirect === false
                    ? { backgroundColor: "red" }
                    : { color: "black" }
                }
                onClick={login}
              >
                Login
              </button>
              <p>(or)</p>
            </div>
            <div className="login__socialMediaButton">
              <button
                className="loginBtn loginBtn--facebook"
                onClick={login__facebook}
              >
                Facebook
              </button>
              <button
                className="loginBtn loginBtn--google"
                onClick={login__google}
              >
                Google
              </button>
              <button
                className="loginBtn loginBtn--twitter"
                onClick={login__twitter}
              >
                Twitter
              </button>
              <button
                className="loginBtn loginBtn--github"
                onClick={login__github}
              >
                Github
              </button>

              <Link to="/register" style={{ textDecoration: "none" }}>
                <div className="login__registerlink">
                  <p>Don't you have an account Register now !!</p>
                </div>
              </Link>
            </div>
          </form>
        </div>
      </div>
      {redirect === true ? <Redirect to="/search" /> : ""}
    </div>
  );
}

export default Login;
