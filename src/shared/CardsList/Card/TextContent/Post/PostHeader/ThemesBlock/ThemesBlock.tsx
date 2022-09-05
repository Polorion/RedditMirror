import React, { FC } from "react";
import styles from "./ThemesBlock.css";

interface ThemesBlockProps {
  text: string;
}

export const ThemesBlock: FC<ThemesBlockProps> = ({ text }) => (
  <span className={styles.themes}>{text}</span>
);
