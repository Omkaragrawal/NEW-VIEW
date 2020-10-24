import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
export default function Register({ openRegister, openLogin, register }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [email, setEmail] = useState("");
  const proceedRegister = () => {
    if (name.length > 1) {
      if (username.length > 3) {
        if (email.length > 1) {
          if (password.length > 1 && password === cpassword) {
            axios
              .post(
                "http://localhost:8081/users/register",
                {
                  name,
                  username,
                  password,
                  email,
                },
                { withCredentials: true }
              )
              .then(
                (res) => (
                  console.log(res),
                  typeof res !== undefined && res.data.status ? l_res() : ""
                )
              );
          }
        }
      }
    }
  };
  const l_res = () => {
    openRegister();
    alert("Your account has been created !!");
    // openLogin();
  };
  return (
    <div className="register" style={{ display: register ? "flex" : "none" }}>
      <nav className="reigster__nav">
        <ArrowBackIcon
          className="register__back"
          onClick={() => openRegister()}
        />
      </nav>
      <div className="register__components">
        <div className="register__inner">
          <p className="register__title">Register</p>
          <div className="register__i">
            <p className="register__label">Name</p>
            <input
              type="text"
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            ></input>
            <p className="register__label">Username</p>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Enter username"
            ></input>
            <p className="register__label">Email</p>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
            ></input>
            <p className="register__label">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              placeholder="Enter password"
            ></input>
            <p className="register__label">Conform Password</p>
            <input
              type="text"
              onChange={(e) => setCpassword(e.target.value)}
              placeholder="Conform password"
            ></input>
            <div className="register__button">
              <button onClick={() => proceedRegister()}>Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
