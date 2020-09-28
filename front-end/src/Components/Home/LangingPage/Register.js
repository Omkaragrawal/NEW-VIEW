// eslint-disable
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
function Register() {
  // eslint-disable-next-line
  const [firstname, setFirstName] = useState("");
  // eslint-disable-next-line
  const [lastname, setLastName] = useState("");
  // eslint-disable-next-line
  const [email, setemail] = useState([""]);
  // eslint-disable-next-line
  const [password, setpassword] = useState("");
  // eslint-disable-next-line
  const [cpassword, setConPass] = useState("");

  const [show, setShow] = useState(true);

  const FirstName = (e) => {
    let str = e.target.value;
    setFirstName(str);
  };
  const LastName = (e) => {
    let str = e.target.value;
    setLastName(str);
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
  const register = () => {
    //OnClick for Register button
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
              onChange={FirstName}
              label="name"
            />

            <p className="register__line">Last Name</p>
            <input
              type="text"
              className="register__input"
              placeholder="Name"
              onChange={LastName}
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
              type="text"
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
                type="text"
                className="register__input"
                placeholder="Conform password"
                label="Conform password"
              />
            )}
            <div className="register__button">
              <button className={"register__submit"} onClick={register}>
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
    </div>
  );
}

export default Register;
