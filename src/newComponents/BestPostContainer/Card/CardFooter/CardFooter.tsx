import React from "react";
import styles from "./Cardfooter.module.css";
import UpOrDown from "./UpOrDown/UpOrDown";

interface ICardFooter {
  like: number;
}

export function CardFooter(props: ICardFooter) {
  return (
    <div className={styles.footer}>
      <UpOrDown like={props.like} />
    </div>
  );
}
