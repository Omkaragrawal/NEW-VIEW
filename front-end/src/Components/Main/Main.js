/* eslint-disable */
import React, { Suspense, useEffect } from "react";
import "./Main.css";
import MenuIcon from "@material-ui/icons/Menu";
import { ExitToApp } from "@material-ui/icons";
import requests from "./requests/request";
import SearchIcon from "@material-ui/icons/Search";
import Menu from "./Menus/Menu";
import { useState } from "react";
import { useStateValue } from "./stateProvider";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export default function Main() {
  useEffect(() => {});
  const [{ movie_id, typeOfMovie, user }, dispatch] = useStateValue();
  const [menu, setMovie] = useState();
  const [showMenuPage, setPageShow] = useState(false);
  const [searchShow, setSearchShow] = useState();

  const showMenu = (status) => setPageShow(status);
  const search = (stat) => setSearchShow(stat);
  const exit = () => {
    dispatch({
      type: "SIGNOUT",
      username: null,
    });
  };
  const Row = React.lazy(() => import("./Components/Row/Row.js"));
  const Result = React.lazy(() => import("./Result/Result.js"));
  const ResultForTv = React.lazy(() => import("./Result/ResultForTv.js"));
  const Search = React.lazy(() => import("./Components/Search/Search"));
  const item = movie_id[0];
  console.log(item);
  return (
    <div className="main">
      <header className="main__nav">
        <div className="main__logo">
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
            alt=""
            height="50px"
            width="70px"
          />
        </div>
        <div className="main__options">
          <p>Hello {user}</p>
          <SearchIcon className="search" onClick={() => search(true)} />
          <ExitToApp className="exit" onClick={() => exit(true)} />
          <MenuIcon className="menu__icon" onClick={() => showMenu(true)} />
        </div>
      </header>
      {!searchShow && (
        <Suspense fallback={() => <h1>hello</h1>}>
          <Row title="Netflix" urls={requests.netflix} />
          <Row title="Amazon Prime" urls={requests.amazon} />
          <Row title="Hotstar" urls={requests.disney_hostar} />
          <Row title="Apple Tv" urls={requests.appletv} />
          <Row title="EROS" urls={requests.eros} />
          <Row title="BBC" urls={requests.bbc_one} />
          <Row title="Mx Player" urls={requests.mx_player} />
          <Row title="VOOT" urls={requests.voot} />
          <Row title="Cinemax" urls={requests.cinemax} />
          <Row title="Sony Live" urls={requests.sonyLiv} />
        </Suspense>
      )}
      {searchShow && <Search search={search} />}
      {movie_id.length !== 0 && typeOfMovie === "movie" && <Result id={item} />}
      {movie_id.length !== 0 && typeOfMovie === "tv" && (
        <ResultForTv id={item} />
      )}
      {showMenuPage && <Menu showMenu={showMenu} />}
      {user === null && <Redirect to="/" />}
    </div>
  );
}
