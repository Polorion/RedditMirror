import * as React from "react";
import { connect } from "react-redux";
import NoPost from "./NoPost/NoPost";
import BestPost from "./BestPost";
import { setModalId, setPostThunk } from "../../store/PostReducer";
import { Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Spiner from "../UI/Spiner/Spiner";
import styles from "./Card/Card.module.css";
import { AppStateType } from "../../store/Store";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
// @ts-ignore
import { RootState } from "/redux";

interface IBestPostContainer {
  userIsLoading: boolean | string;
  modalId: string | (string & []);
  active: boolean | string;
  bestPost: any[];
  userIsActive: boolean | string;
  afterPostPack: string | (string & []);
  token: string;
  setModalId: (id: string) => { id: string; type: string };
  setPostThunk: any;
}

function BestPostContainer(props: IBestPostContainer) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observerDiv = new IntersectionObserver(
      async (entries) => {
        if (entries[0].isIntersecting) {
          if (count < 3) {
            await props.setPostThunk(props.token, props.afterPostPack);
            await setCount((prevState) => prevState + 1);
          }
        }
      },
      {
        rootMargin: "200px",
      }
    );
    if (ref.current) {
      observerDiv.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observerDiv.unobserve(ref.current);
      }
    };
  }, [props.afterPostPack, props.active]);

  return (
    <>
      <Outlet />
      {props.active ? (
        <div>
          <BestPost
            bestPost={props.bestPost}
            setModalId={props.setModalId}
            count={count}
            setCount={setCount}
            setPostThunk={props.setPostThunk}
            token={props.token}
            afterPostPack={props.afterPostPack}
          />
          <div className={"observerDiv"} ref={ref}>
            observer
          </div>
        </div>
      ) : props.userIsLoading ? (
        <div className={styles.spinDiv}>
          <Spiner />
        </div>
      ) : (
        <NoPost />
      )}
    </>
  );
}
const mapStateToProps = (state: AppStateType) => {
  return {
    userIsActive: state.MainPage.active,
    token: state.MainPage.token,
    bestPost: state.PostPage.bestPost,
    modalId: state.PostPage.modalId,
    afterPostPack: state.PostPage.afterPostPack,
    active: state.MainPage.active,
    userIsLoading: state.MainPage.userIsLoading,
  };
};

export default connect(mapStateToProps, { setPostThunk, setModalId })(
  BestPostContainer
);
