import React from "react";
import LandingPage from "./Components/LangingPage/LandingPage";
import Login from "./Components/LangingPage/Login";
import Register from "./Components/LangingPage/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Liked from "./MainPage/Components/Liked";
// import Fav from "./MainPage/Components/Fav";
import Popular from "./Components/Home/SearchPage/Components/Popular/Popular";
import Toprated from "./Components/Home/SearchPage/Components/Toprated/Toprated";
import Upcoming from "./Components/Home/SearchPage/Components/UPcoming/Upcoming";
import Trending from "./Components/Home/SearchPage/Components/Nowplaying/Trending";

import Api from "./Components/Home/SearchPage/Api";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/home">
            <LandingPage />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/search">
            <Api />
          </Route>
          <Route exact path="/top-rated">
            <Toprated />
          </Route>
          <Route exact path="/popular">
            <Popular />
          </Route>
          <Route exact path="/trending">
            <Trending />
          </Route>
          <Route exact path="/upcoming">
            <Upcoming />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
