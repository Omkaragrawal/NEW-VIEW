import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
function Nav({ input_val, keyHand, clicked }) {
  const [count, setCount] = useState(0);
  const b = count % 2 !== 0 ? true : false;
  console.log(b);
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
            className={b ? "search-bar-true" : "search-bar-false"}
            onKeyPress={keyHand}
            label="search"
            onChange={input_val}
            placeholder="Type something to search"
          />
        </div>
        <SearchIcon
          onClick={() => setCount(count + 1)}
          style={
            b
              ? { color: "white", marginRight: "10px", paddingRight: "30vh" }
              : { color: "white", marginRight: "10px", paddingRight: "20px" }
          }
        />
        <div className="exit-options">
          <ExitToAppIcon />
        </div>
        <div
          className="menu-options"
          style={clicked ? { paddingRight: "0px" } : { paddingRight: "20px" }}
        >
          <MenuIcon
            onClick={() => {
              clicked(true);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
