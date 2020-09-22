import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import NavBar from "./Components/NavBar";
function LandingPage({ Image }) {
  return (
    <div className="landing">
      <NavBar />
      <div className="landing__background">
        <div className="landing__intro">
          <h1>Get Started</h1>
          <p>To watch and get info about your favourite movies</p>
          <Link to="/register">
            <button className="landing__button">Register</button>
          </Link>
          <p
            style={{
              color: "#111",
              textShadow: "none",
              fontSize: "16px",
              marginTop: "10px",
              color: "white",
            }}
          >
            To register, Click above
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
