import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./ModalWindow.module.css";
import { useNavigate } from "react-router-dom";
import UpOrDown from "../BestPostContainer/Card/CardFooter/UpOrDown/UpOrDown";
import ComentPost from "../BestPostContainer/Card/ComentPost/ComentPost";

interface IModalCard {
  post: {
    title: string;
    author: string;
    url_overridden_by_dest: string;
    name: string;
    ups: number;
  };
}

const ModalCard = (props: IModalCard) => {
  const node = document.querySelector("#modal_root");
  if (!node) return null;
  const history = useNavigate();

  return ReactDOM.createPortal(
    props.post && (
      <>
        <div
          onClick={() => {
            history("/post");
          }}
          className={styles.modalBody}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={styles.afterBody}
          >
            <div className={styles.body}>
              <div className={styles.modalTop}>
                <div className={styles.upDown}>
                  <UpOrDown like={props.post.ups} />
                </div>

                <div className={styles.topInfo}>
                  <p>{props.post.title}</p>
                  <span>опубликованно 5 часов назад</span>
                  <img src="../src/assets/img/logo.png" alt="" />
                  <span>{props.post.author}</span>
                </div>
              </div>
              <div className={styles.modalMidl}>
                <img src={props.post.url_overridden_by_dest} alt="" />
              </div>
              <ComentPost />
            </div>
          </div>
        </div>

        <div>
          <div>
            <div>
              <UpOrDown like={props.post.ups} />

              <div>
                <p>{props.post.title}</p>
                <span>опубликованно 5 часов назад</span>
                <img src="../src/assets/img/logo.png" alt="" />
                <span>{props.post.name}</span>
              </div>
            </div>
            <div>
              <img src={props.post.url_overridden_by_dest} alt="" />
            </div>{" "}
            <ComentPost />
          </div>
        </div>
      </>
    ),

    node
  );
};

export default ModalCard;
