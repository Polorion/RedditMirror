import React, { FC } from "react";
import styles from "./Content.css";

interface IContentProps {
  children?: React.ReactNode;
}

export const Content: FC<IContentProps> = ({ children }) => (
  <main className={styles.content}>{children}</main>
);
