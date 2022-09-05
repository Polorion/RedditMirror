import React, { FC } from "react";
import styles from "./CommentList.css";

interface CommentListProps {
  children: React.ReactNode;
}

export const CommentList: FC<CommentListProps> = ({ children }) => (
  <ul className={styles.commentList}>{children}</ul>
);
