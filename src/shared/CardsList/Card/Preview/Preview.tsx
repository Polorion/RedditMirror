import React, { FC } from "react";
import styles from "./Preview.css";

interface PreviewProps {
  imgSrc: string;
}

export const Preview: FC<PreviewProps> = ({ imgSrc }) => (
  <div className={styles.preview}>
    <img className={styles.previewImg} src={imgSrc} alt="img" />
  </div>
);
