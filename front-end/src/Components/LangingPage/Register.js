// eslint-disable
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
function Register() {
  // eslint-disable-next-line
  const [name, setName] = useState("");
  // eslint-disable-next-line
  const [email, setemail] = useState([""]);
  // eslint-disable-next-line
  const [password, setpassword] = useState("");
  // eslint-disable-next-line
  const [cpassword, setConPass] = useState("");

  const Name = (e) => {
    let str = e.target.value;
    setName(str);
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
  // console.log(name, email, password, cpassword);
  return (
    <div className="register">
      <div className="register__space">
        <p className="register__header">Register</p>
        <div className="register__content">
          <form>
            <p className="register__line">Name</p>
            <input
              type="text"
              className="register__input"
              placeholder="Name"
              onChange={Name}
            />

            <p className="register__line">Email</p>
            <input
              onChange={Email}
              type="text"
              className="register__input"
              placeholder="Email"
            />

            <p className="register__line">Password</p>
            <input
              onChange={Password}
              type="text"
              className="register__input"
              placeholder="Password"
            />

            <p className="register__line">Conform Password</p>
            <input
              onChange={Cpassword}
              type="text"
              className="register__input"
              placeholder="Conform password"
            />

            <div className="register__button">
              <button className="register__submit">Register</button>
            </div>
            <div className="register__loginLink">
              <Link to="/login">
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
