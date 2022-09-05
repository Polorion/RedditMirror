import * as React from "react";
import Card from "./Card/Card";
import GeneratorRandomString from "../../utils/GeneratorRandomString";
import styles from "./Card/Card.module.css";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { AppStateType } from "../../store/Store";
interface IBestPost {
  token: any;
  bestPost: any[];
  afterPostPack: string;
  setPostThunk: (
    token: any,
    afterPost?: string
  ) => ThunkAction<void, AppStateType, unknown, Action<string>>;
  setModalId: (id: string) => { type: string; id: string };
  count: number;
  setCount: any;
}

const BestPost = (props: IBestPost) => {
  return (
    <div className={styles.body}>
      {props.bestPost.map((el) => (
        <Card
          key={GeneratorRandomString()}
          data={el.data}
          setModalId={props.setModalId}
        />
      ))}
      {props.count === 4 && (
        <button
          className={styles.btnAddPost}
          onClick={() => {
            props.setCount(0);
            props.setPostThunk(props.token, props.afterPostPack);
          }}
        >
          загрузить еще
        </button>
      )}
    </div>
  );
};

export default BestPost;
