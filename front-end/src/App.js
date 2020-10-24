import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Main from "./Components/Main/Main.js";
import { Suspense } from "react";
function App() {
  return (
    <Router>
      <Suspense fallback={() => <h1>Loading......</h1>}>
        <Switch>
          <Route exact path="/" component={() => <Landing />} />
          <Route exact path="/main" component={() => <Main />} />
          <Route path="*" component={() => <h1>404 ERROR</h1>} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
