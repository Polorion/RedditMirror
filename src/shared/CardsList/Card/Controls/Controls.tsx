import React, { FC } from "react";
import styles from "./Controls.css";

interface ControlsProps {
  children?: React.ReactNode;
}

export const Controls: FC<ControlsProps> = ({ children }) => (
  <div className={styles.controls}>{children}</div>
);
