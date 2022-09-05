import React, { useEffect } from "react";
import "./main.global.css";
import { hot } from "react-hot-loader/root";
import "./store/Store";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import store from "./store/Store";
import { getUserThunk, setToken, SetUserData } from "./store/MainReducer";
import BestPostContainer from "./newComponents/BestPostContainer/BestPostContainer";
import Layout from "./newComponents/Layout/Layout";
import Page404 from "./newComponents/Page404/Page404";
import ModalCardContainer from "./newComponents/ModalCard/ModalCardContainer";
import useIsMounted from "./hooks/useIsMounted";

const AppComponent = () => {
  const [isMounted] = useIsMounted();
  useEffect(() => {
    store.dispatch(SetUserData(window.__data__));
    store.dispatch(setToken(localStorage.getItem("token")));
    if (localStorage.getItem("token") !== "") {
      store.dispatch(getUserThunk(store.getState().MainPage.token));
    }
  }, []);

  return (
    <Provider store={store}>
      {isMounted && (
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Layout />}>
              <Route index element={<Navigate to="/post" />} />
              <Route path={"post"} element={<BestPostContainer />}>
                <Route path={":id"} element={<ModalCardContainer />} />
              </Route>
              <Route path={"auth"} element={<Navigate to="/post" />} />
              <Route path={"/*"} element={<Page404 />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </Provider>
  );
};

export const App = hot(() => <AppComponent />);
