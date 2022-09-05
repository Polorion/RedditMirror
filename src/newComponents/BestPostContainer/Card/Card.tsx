import React from "react";
import styles from "./Card.module.css";
import { CardFooter } from "./CardFooter/CardFooter";
import { DropDown } from "./DropDown/DropDown";
import { NavLink } from "react-router-dom";

interface ICard {
  setModalId: (id: string) => { type: string; id: string };
  data: {
    id: string;
    url: string;
    title: string;
    ups: number;
    author: string;
  };
}

export function Card(props: ICard) {
  return (
    <li
      onClick={() => {
        props.setModalId(props.data.id);
      }}
      className={styles.body_card}
    >
      <div className={styles.bodyPost}>
        <div className={styles.imgBody}>
          <img className={styles.img} src={props.data.url} alt="" />
        </div>
        <div className={styles.header}>
          <div className={styles.header_top}>
            <NavLink
              to={`/post/id${props.data.id}`}
              className={styles.header_title}
            >
              {props.data.title}{" "}
            </NavLink>
          </div>
          <div className={styles.header_down}>
            <span className={styles.header_time}>
              опубликованно 5 часов назад
            </span>
            <img
              className={styles.logo}
              src="../src/assets/img/logo.png"
              alt=""
            />
            <span className={styles.header_name}>{props.data.author}</span>
          </div>
        </div>
      </div>
      <CardFooter like={props.data.ups} />
      <DropDown />
    </li>
  );
}

export default Card;
