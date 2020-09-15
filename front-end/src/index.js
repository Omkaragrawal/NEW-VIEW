import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import Login from "./Components/IntroPage/Login";
import Signup from "./Components/IntroPage/Signup";
import Landing from "./Components/IntroPage/Landing";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Api from "./Components/SearchPage/Api";

ReactDOM.render(
  <BrowserRouter>
    <div className="nav">
      <ul>
        <li>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
            Login
          </Link>
        </li>
        <li>
          <Link to="/signup" style={{ color: "white", textDecoration: "none" }}>
            Signup
          </Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/signup" component={Signup}></Route>
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
