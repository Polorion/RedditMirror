import React from "react";
import styles from "./Layout.css";

export function Layout({ children }) {
  return <div className={styles.layout}>{children}</div>;
}
