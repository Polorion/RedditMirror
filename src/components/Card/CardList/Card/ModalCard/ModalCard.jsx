import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./ModalWindow.module.css";
import { useNavigate } from "react-router-dom";
import AddEventListnerAndRemove from "../../../../../utils/addEventListnerAndRemove";

const ModalCard = (props) => {
  if (props.posts) {
    console.log(props.posts.data);
    console.log(props.posts.data.url);
  }
  const ref = useRef();
  useEffect(() => {
    const addEvent = AddEventListnerAndRemove(window, "click", (e) => {
      if (e.target != ref.current) {
        history("/post");
      }
    });
    return () => {
      addEvent();
    };
  }, []);
  const history = useNavigate();

  return ReactDOM.createPortal(
    <div ref={ref} className={styles.modalWindowBody}>
      <div className={styles.modalTop}>
        {props.posts && <img src={props.posts.data.url} alt="" />}
      </div>
      <div className={styles.modalDown}>
        {props.posts && props.posts.data.title}
      </div>
    </div>,
    document.querySelector("#modal_card_root")
  );
};

export default ModalCard;
