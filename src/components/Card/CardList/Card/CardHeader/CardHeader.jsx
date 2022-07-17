import React from "react";
import styles from "./cardheader.css";
import { NavLink } from "react-router-dom";

export function CardHeader(props) {
  return (
    <div className={styles.header}>
      <div className={styles.header_top}>
        <NavLink to={`/post/id${props.id}`} className={styles.header_title}>
          {props.title}{" "}
        </NavLink>
      </div>
      <div className={styles.header_down}>
        <span className={styles.header_time}>опубликованно 5 часов назад</span>
        <img className={styles.logo} src="../src/assets/img/logo.png" alt="" />
        <span className={styles.header_name}>{props.name}</span>
      </div>
    </div>
  );
}
