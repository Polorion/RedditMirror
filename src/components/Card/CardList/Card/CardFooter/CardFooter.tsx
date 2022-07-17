import React from "react";
import styles from "./Cardfooter.css";
// import { Controls } from "./Controls";
// import { Message } from "./Message";
import { UpOrDown } from "./UpOrDown";

export function CardFooter() {
  return (
    <div className={styles.footer}>
      <UpOrDown />
    </div>
  );
}
