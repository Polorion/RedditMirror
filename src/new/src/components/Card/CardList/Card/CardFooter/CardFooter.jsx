import React from "react";
import styles from "./Cardfooter.css";
import UpOrDown from "./UpOrDown/UpOrDown";


export function CardFooter(props) {
  return (
    <div className={styles.footer}>
      <UpOrDown like={props.like} />
    </div>
  );
}
