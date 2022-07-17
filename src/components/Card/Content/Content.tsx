import React from "react";
import styles from "./Content.css";

interface Icontent {
  children?: React.ReactNode;
}

export function Content({ children }: Icontent) {
  return <main className={styles.content}>{children}</main>;
}
