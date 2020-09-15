import React from "react";
import LandingPage from "./LangingPage/LandingPage.js";
import Login from "./LangingPage/Login.js";
import Register from "./LangingPage/Register.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Liked from "./MainPage/Components/Liked";
// import Fav from "./MainPage/Components/Fav";
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
