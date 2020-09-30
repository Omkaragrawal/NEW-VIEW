import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import NavBar from "./Components/NavBar";
import Banner from "./Components/Banner";
function LandingPage({ Image }) {
  return (
    <div className="landing">
      <NavBar />
      <Banner />
      <div className="landing__inner">
        <div className="landing__info">
          <h3
            style={{
              fontSize: "6vh",
              fontStyle: "italic",
              fontWeight: "800",
              marginTop: "5vh",
              color: "whitesmoke",
            }}
          >
            Get Started
          </h3>
          <p style={{ fontSize: "7vh" }}>
            To watch and get info about your favourite movies
          </p>
          <div className="Down">
            <ArrowDownward style={{ fontSize: "10vh" }} />
          </div>

          <Link to="/register">
            <button className="button-btn" style={{ marginTop: "5vh" }}>
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
