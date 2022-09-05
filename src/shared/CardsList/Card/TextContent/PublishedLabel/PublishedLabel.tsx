import React, { FC } from "react";
import styles from "./PublishedLabel.css";

interface PublishedLabelProps {
  publishedLabel: string;
}

export const PublishedLabel: FC<PublishedLabelProps> = ({ publishedLabel }) => (
  <span className={styles.createdAt}>
    <span className={styles.publishedLabel}>published </span>
    {publishedLabel}
  </span>
);
