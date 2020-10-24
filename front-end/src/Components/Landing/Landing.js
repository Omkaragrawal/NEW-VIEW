import React, { useState } from "react";
import "./Landing.css";
import Login from "./Login";
import Register from "./Register";
export default function Landing() {
  const [landing, setLanding] = useState(false);
  const [register, setRegister] = useState(false);
  const openLanding = () => {
    setLanding(!landing);
  };
  const openRegister = () => {
    setRegister(!register);
  };
  return (
    <div className="landing">
      <nav className="landing__navbar">
        <div className="landing__logo">
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
            alt=""
            height="50px"
            width="70px"
          />
        </div>
        <div className="landing__options">
          <li>About</li>
          <li onClick={() => openRegister()}>Register</li>
          <li onClick={() => openLanding()}>Login</li>
        </div>
      </nav>
      <Login openLanding={openLanding} landing={landing} />
      <Register
        openRegister={openRegister}
        openLanding={openLanding}
        register={register}
      />
    </div>
  );
}
