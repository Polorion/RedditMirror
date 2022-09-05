import * as React from "react";

import "./main.global.css";
import CardContainer from "./components/Card/CardContainer";

import { BrowserRouter } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import Store from "./store/RedaxState";
import Provider from "react-redux/es/components/Provider";

function AppComponent() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <CardContainer />
      </BrowserRouter>
    </Provider>
  );
}
export const App = hot(AppComponent);
