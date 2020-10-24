/* eslint-disable */
import React, { useState } from "react";
import "./Login.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import axios from "axios";
import Main from "../Main/Main";
import { Redirect } from "react-router-dom";
import { useStateValue } from "../Main/stateProvider";
export default function Login({ openLanding, landing }) {
  const [{ user }, dispatch] = useStateValue();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const furtherLogin = () => {
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
            ? r_true()
            : setRedirect(false)
        )
      );
  };
  //if redirect is true
  const r_true = () => {
    dispatch({
      type: "ADD_USERNAME",
      username: username,
    });
    setRedirect(true);
  };
  return (
    <div className="login" style={{ display: landing ? "flex" : "none" }}>
      <nav className="login__nav">
        <ArrowBackIcon onClick={() => openLanding()} />
      </nav>
      <div className="login__components">
        <div className="login__inner">
          <p className="login__title">Login</p>
          <p className="login__label">Username</p>
          <input
            type="text"
            placeholder="username"
            aria-label="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <p className="login__label">Password</p>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="login__button">
            <button onClick={() => furtherLogin()}>Login</button>
          </div>
        </div>
      </div>
      {redirect && <Redirect to="/main" />}
    </div>
  );
}
