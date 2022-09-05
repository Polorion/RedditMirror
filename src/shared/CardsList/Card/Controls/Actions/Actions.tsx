import React, { FC } from "react";
import styles from "./Actions.css";

interface ActionsProps {
  children?: React.ReactNode;
}

export const Actions: FC<ActionsProps> = ({ children }) => (
  <div className={styles.actions}>{children}</div>
);
