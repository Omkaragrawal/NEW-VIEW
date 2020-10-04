import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ThumbsUp from "@material-ui/icons/ThumbUp";
import { Redirect } from "react-router-dom";
import axios from "axios";
function Nav({ input_val, keyHand, clicked }) {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState();
  const logout = () => {
    axios.get("http://localhost:8081/users/logout", { withCredentials: true });
  };
  return (
    <div className="nav">
      <Link className="nav__link" to="/search">
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
            className="search-bar"
            onKeyPress={keyHand}
            label="search"
            onChange={input_val}
            placeholder="Type something to search"
          />
        </div>
        <div className="search">
          <button onClick={() => keyHand}>Search</button>
        </div>
        <div className="liked">
          <Link
            to="/liked"
            className="link"
            style={{ textDecoration: "none", color: "none" }}
          >
            <ThumbsUp />
            <p>Liked</p>
          </Link>
        </div>
        <div className="favourites">
          <Link
            to="/favourites"
            className="link"
            style={{ textDecoration: "none" }}
          >
            <FavoriteIcon />
            <p>Favourite</p>
          </Link>
        </div>
        <div className="exit-options">
          <ExitToAppIcon onClick={() => (setShow(true), logout)} />
          <p>Signout</p>
        </div>
        <div
          className="menu-options"
          style={
            (clicked ? { paddingRight: "0px" } : { paddingRight: "20px" },
            { color: "white" })
          }
        >
          <MenuIcon
            onClick={() => {
              clicked(true);
            }}
          />
          <p style={{ fontSize: "14px", color: "white" }}>Menu</p>
        </div>
      </div>
      {show === true && <Redirect to="/login" />}
    </div>
  );
}

export default Nav;
