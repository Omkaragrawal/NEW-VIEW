import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StateProvider } from "./Components/Main/stateProvider";
import reducer, { initialState } from "./Components/Main/reducer";
ReactDOM.render(
  <>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </>,
  document.getElementById("root")
);
