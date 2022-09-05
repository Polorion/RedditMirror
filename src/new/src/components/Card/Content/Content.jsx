import React from "react";
import styles from "./Content.module.css";


 function Content({ children }) {
  return <main className={styles.content}>{children}</main>;
}
 export default  Content