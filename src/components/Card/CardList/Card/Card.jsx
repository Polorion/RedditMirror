import React from "react";
import styles from "./Card.css";
import { CardContent } from "./CardContent";
import { CardFooter } from "./CardFooter";
import { CardHeader } from "./CardHeader";
import { DropDown } from "./DropDown";

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
        <CardHeader id={props.id} title={props.title} name={props.avtor} />
      </div>
      <CardFooter />
      <DropDown />
    </li>
  );
}
