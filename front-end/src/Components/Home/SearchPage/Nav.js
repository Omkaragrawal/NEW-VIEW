import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SearchIcon from "@material-ui/icons/Search";
function Nav({ input_val, keyHand }) {
  const [clicked, setClick] = useState();
  return (
    <div className="nav">
      <Link className="nav__link" to="/home">
        <img
          className="nav__logo"
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
          alt="logo"
        />
      </Link>
      <div className="nav__options">
        <div className="search-bar">
          <input
            type="text"
            className={clicked ? "search-bar-true" : "search-bar-false"}
            onKeyPress={keyHand}
            label="searchbar"
            onChange={input_val}
            placeholder="Type something to search"
          />
        </div>
        <SearchIcon onClick={() => setClick(true)} style={{ color: "white" }} />
        <ul className="nav__content">
          <Link to="popular">
            <li>Popular</li>
          </Link>
          <Link to="top-rated">
            <li>Top-rated</li>
          </Link>
          <Link to="trending">
            <li>Now playing</li>
          </Link>
          <Link to="upcoming">
            <li>Upcoming</li>
          </Link>
        </ul>
        <Link to="/home">
          <ExitToAppIcon />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
