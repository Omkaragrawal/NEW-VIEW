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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      apiResponse: "",
    };
  }
  callApi() {
    fetch("http://localhost:8080/").then((res) => {
      res && console.log(res.text());
    });
  }
  componentDidMount() {
    this.callApi();
  }
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
