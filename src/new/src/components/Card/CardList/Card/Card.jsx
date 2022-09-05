import React from "react";
import styles from "./Card.css";
import { CardFooter } from "./CardFooter/CardFooter";
import {DropDown} from "./DropDown/DropDown";
import {CardHeader} from "./CardHeader/CardHeader";
import {CardContent} from "./CardContent/CardContent";

export function Card(props) {
  return (
    <li
      onClick={() => {
        props.setIdModal(props.id);
      }}
      className={styles.body_card}
    >
      <div className={styles.bodyPost}>
        <CardContent imgPost={props.imgPost} />
        <CardHeader
          id={props.id}
          title={props.title}
          name={props.avtor}
          setModalIsOpenOrClosed={props.setModalIsOpenOrClosed}
        />
      </div>
      <CardFooter like={props.like} />
      <DropDown />
    </li>
  );
}

export default Card