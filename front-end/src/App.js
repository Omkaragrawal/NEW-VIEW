import React from "react";
import LandingPage from "./Components/Home/LangingPage/LandingPage";
import Login from "./Components/Home/LangingPage/Login";
import Register from "./Components/Home/LangingPage/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Popular from "./Components/Home/SearchPage/Components/Popular/Popular";
import Toprated from "./Components/Home/SearchPage/Components/Toprated/Toprated";
import Upcoming from "./Components/Home/SearchPage/Components/UPcoming/Upcoming";
import NowPlaying from "./Components/Home/SearchPage/Components/Nowplaying/NowPlaying";
import NoMatch from "./Components/NoMatch";
import Api from "./Components/Home/SearchPage/Api";
import Action from "./Components/Home/SearchPage/Components/Action/Action";
import Comedy from "./Components/Home/SearchPage/Components/Comedy/Comedy";
import Horror from "./Components/Home/SearchPage/Components/Horror/Horror";
import Documentries from "./Components/Home/SearchPage/Components/Documentries/Documentries";
import Romance from "./Components/Home/SearchPage/Components/Romance/Romance";
import Trending from "./Components/Home/SearchPage/Components/Trending/Trending";
import Liked from "./Components/Home/SearchPage/Components/Liked__Favourite/Liked/Liked";
import Fav from "./Components/Home/SearchPage/Components/Liked__Favourite/Favourites/Fav";
import Animation from "./Components/Home/SearchPage/Components/Animation/Animation";
import Crime from "././Components/Home/SearchPage/Components/Crime/Crime";
import Drama from "./Components/Home/SearchPage/Components/Drama/Drama";
import Family from "./Components/Home/SearchPage/Components/Family/Family";
import Fantasy from "./Components/Home/SearchPage/Components/Fantasy/Fantasy";
import History from "./Components/Home/SearchPage/Components/History/History";
import Music from "./Components/Home/SearchPage/Components/Music/Music";
import Mystry from "./Components/Home/SearchPage/Components/Mystry/Mystry";
import Science from "./Components/Home/SearchPage/Components/Science/Science";
import Tvmovie from "./Components/Home/SearchPage/Components/Tvmovie/Tvmovie";
import Thriller from "./Components/Home/SearchPage/Components/Thriller/Thriller";
import War from "./Components/Home/SearchPage/Components/War/War";
import Western from "./Components/Home/SearchPage/Components/Western/Western";
import Netflix from "./Components/Home/SearchPage/Streams/Netflix/Netflix";
import Amazon from "./Components/Home/SearchPage/Streams/Amazon/Amazon";
import Bbcone from "./Components/Home/SearchPage/Streams/Bbcone/Bbc";
import Cinemax from "./Components/Home/SearchPage/Streams/Cinemax/Cinemax";
import Eros from "./Components/Home/SearchPage/Streams/Eros/Eros";
import Hotstar from "./Components/Home/SearchPage/Streams/Hotstar/Hotstart";
import Mxplayer from "./Components/Home/SearchPage/Streams/Mxplayer/Mxplayer";
import Sony from "./Components/Home/SearchPage/Streams/Sony/Sony";
import Voot from "./Components/Home/SearchPage/Streams/Voot/Voot";
import Apple from "./Components/Home/SearchPage/Streams/Appletv/Apple";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/">
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
            <Route exact path="/nowplaying">
              <NowPlaying />
            </Route>
            <Route exact path="/upcoming">
              <Upcoming />
            </Route>
            <Route exact path="/trending">
              <Trending />
            </Route>
            <Route exact path="/action">
              <Action />
            </Route>
            <Route exact path="/comedy">
              <Comedy />
            </Route>
            <Route exact path="/horror">
              <Horror />
            </Route>
            <Route exact path="/documentries">
              <Documentries />
            </Route>
            <Route exact path="/romance">
              <Romance />
            </Route>
            <Route exact path="/liked">
              <Liked />
            </Route>
            <Route exact path="/favourites">
              <Fav />
            </Route>
            <Route exact path="/animation">
              <Animation />
            </Route>
            <Route exact path="/crime">
              <Crime />
            </Route>
            <Route exact path="/drama">
              <Drama />
            </Route>
            <Route exact path="/family">
              <Family />
            </Route>
            <Route exact path="/fantasy">
              <Fantasy />
            </Route>
            <Route exact path="/history">
              <History />
            </Route>
            <Route exact path="/music">
              <Music />
            </Route>
            <Route exact path="/mystry">
              <Mystry />
            </Route>
            <Route exact path="/science">
              <Science />
            </Route>
            <Route exact path="/thriller">
              <Thriller />
            </Route>
            <Route exact path="/tvmovie">
              <Tvmovie />
            </Route>
            <Route exact path="/war">
              <War />
            </Route>
            <Route exact path="/western">
              <Western />
            </Route>
            <Route exact path="/netflix">
              <Netflix />
            </Route>
            <Route exact path="/amazon">
              <Amazon />
            </Route>
            <Route exact path="/apple">
              <Apple />
            </Route>
            <Route exact path="/bbc">
              <Bbcone />
            </Route>
            <Route exact path="/cinemax">
              <Cinemax />
            </Route>
            <Route exact path="/eros">
              <Eros />
            </Route>
            <Route exact path="/hotstar">
              <Hotstar />
            </Route>
            <Route exact path="/mxplayer">
              <Mxplayer />
            </Route>
            <Route exact path="/sony">
              <Sony />
            </Route>
            <Route exact path="/voot">
              <Voot />
            </Route>
            <Route exact path="">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
