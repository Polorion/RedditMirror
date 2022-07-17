import * as React from "react";

import styles from "./Header/Header.css";
import { useEffect, useState } from "react";
import CardListContainer from "./CardList/CardListContainer";
import ModalWindow from "./CardList/Card/ComentPost/ComentPost";
import { Header } from "./Header/Header";
import { Layout } from "./Layout/Layout";
import { Content } from "./Content/Content";
import { Navigate, Routes, Route } from "react-router-dom";
import ModalCardContainer from "./CardList/Card/ModalCard/ModalCardContainer";

function CardClassComponent(props) {
  const [postOrComent, setpostOrComent] = useState(true);
  useEffect(() => {}, [props.token]);
  return (
    <Layout>
      <Header token={props.token} data={props.data} />
      <Content>
        <Routes>
          <Route path={"/"}>
            <Route index element={<Navigate to={"/post"} />} />
            <Route
              path={"post/*"}
              element={
                <CardListContainer
                  token={props.token}
                  setIdModal={props.setIdModal}
                />
              }
            >
              <Route
                path={":id"}
                element={
                  <ModalCardContainer
                    posts={props.posts}
                    modalData={props.modalData}
                  />
                }
              />
            </Route>
            {props.token ? (
              <Route path={"auth"} element={<Navigate to="/post" />} />
            ) : (
              (props.IsAuthPage(),
              (<Route path={"auth"} element={<Navigate to="/post" />} />))
            )}
          </Route>
          <Route path={"/*"} element={<div>страница 404</div>} />
        </Routes>
      </Content>
    </Layout>
  );
}

export default CardClassComponent;
