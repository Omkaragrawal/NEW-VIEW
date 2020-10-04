// eslint-disable
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Register.css";
import axios from "axios";

function Register() {
  // eslint-disable-next-line
  const [name, setName] = useState("");
  // eslint-disable-next-line
  const [username, setUserName] = useState("");
  // eslint-disable-next-line
  const [email, setemail] = useState("");
  // eslint-disable-next-line
  const [password, setpassword] = useState("");
  // eslint-disable-next-line
  const [cpassword, setConPass] = useState("");
  // eslint-disable-next-line
  const [redirect, setRedirect] = useState();

  //Getting Input
  const Name = (e) => {
    let str = e.target.value;
    setName(str);
  };
  const UserName = (e) => {
    let str = e.target.value;
    setUserName(str);
  };
  const Email = (e) => {
    let str = e.target.value;
    setemail(str);
  };
  const Password = (e) => {
    let str = e.target.value;
    setpassword(str);
  };
  const Cpassword = (e) => {
    let str = e.target.value;
    setConPass(str);
  };
  //Onclick
  const Register = () => {
    if (name.length > 4) {
      if (username.length > 3) {
        if (password.length > 4) {
          if (password === cpassword) {
            const body = {
              name: name,
              email: email,
              username: username,
              password: password,
            };
            //We were passisng the variable "body" in the request where the variable which contains the data will be passed
            axios
              .post("http://localhost:8081/users/register", {
                body,
              })
              .then(
                (res) => (
                  console.log(res.data.status),
                  typeof res !== undefined && res.data.status
                    ? setRedirect(true)
                    : setRedirect(false)
                )
              )
              .catch((err) => console.log("ERR"));
          }
        }
      }
    }
  };
  return (
    <div className="register">
      <div className="register__space">
        <p className="register__header">Register</p>
        <div className="register__content">
          <form>
            <p className="register__line">First Name</p>
            <input
              type="text"
              className="register__input"
              placeholder="Name"
              onChange={Name}
              label="name"
            />

            <p className="register__line">Username</p>
            <input
              type="text"
              className="register__input"
              placeholder="Name"
              onChange={UserName}
              label="name"
            />
            <p className="register__line">Email</p>
            <input
              onChange={Email}
              type="text"
              className="register__input"
              placeholder="Email"
              label="email"
            />
            <p className="register__line">Password</p>
            <input
              onChange={Password}
              type="password"
              className="register__input"
              placeholder="Password"
              label="password"
            />

            {password.length > 1 && (
              <p className="register__line">Conform Your Password</p>
            )}
            {password.length > 1 && (
              <input
                onChange={Cpassword}
                type="password"
                className="register__input"
                placeholder="Conform password"
                label="Conform password"
              />
            )}
            <div className="register__button">
              <button
                className={"register__submit"}
                onClick={Register}
                disabled={cpassword === password ? false : true}
              >
                Register
              </button>
            </div>
            <div className="register__loginLink">
              <Link to="/login" style={{ textDecoration: "none" }}>
                <p>To login, click here</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
      {redirect === true ? <Redirect to="/login" /> : ""}
    </div>
  );
}

export default Register;
