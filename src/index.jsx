import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppComponent } from "./App";
import Provider from "react-redux/es/components/Provider";
import Store from "./store/RedaxState";
import { BrowserRouter } from "react-router-dom";

window.addEventListener("load", () => {
  ReactDOM.render(
    <Provider store={Store}>
      <BrowserRouter>
        <AppComponent />
      </BrowserRouter>
    </Provider>,
    document.getElementById("react_root")
  );
});
