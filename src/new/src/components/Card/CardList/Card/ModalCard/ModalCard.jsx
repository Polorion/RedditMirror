import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./ModalWindow.module.css";

import AddEventListnerAndRemove from "../../../../../utils/addEventListnerAndRemove";
import UpOrDown from "../CardFooter/UpOrDown/UpOrDown";
import {useNavigate} from "react-router-dom";


const ModalCard = (props) => {
  const ref = useRef();
  useEffect(() => {
    const addEvent = AddEventListnerAndRemove(window, "click", (e) => {
      if (!ref.current.contains(e.target)) {
        history("/post");
        props.setModalIsOpenOrClosed("false");
      }
    });
    return () => {
      addEvent();
    };
  }, []);
  const history = useNavigate();

  return ReactDOM.createPortal(
    props.posts && (
      <div ref={ref} className={styles.modalWindowBody}>
        <div className={styles.bodyTop}>
          <UpOrDown like={props.posts.data.ups} />
          <div>
            {" "}
            <p className={styles.modalDown}>{props.posts.data.title}</p>
            <span className={styles.header_time}>
              опубликованно 5 часов назад
            </span>
            <img
              className={styles.logo}
              src="../src/assets/img/logo.png"
              alt=""
            />
            <span className={styles.header_name}>{props.posts.data.name}</span>
          </div>
        </div>
        <div className={styles.modalTop}>
          <img src={props.posts.data.url_overridden_by_dest} alt="" />
        </div>
      </div>
    ),
    document.querySelector("#modal_root")
  );
};

export default ModalCard;
