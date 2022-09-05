import React, { FC } from "react";
import styles from "./Layout.css";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => (
  <div className={styles.Layout}>{children}</div>
);
