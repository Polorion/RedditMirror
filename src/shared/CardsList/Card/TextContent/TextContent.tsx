import React, { FC } from "react";
import { Link } from "react-router-dom";
import { PublishedLabel } from "./PublishedLabel/PublishedLabel";
import styles from "./TextContent.css";
import { UserName } from "./UserName/UserName";

interface TextContentProps {
  userName: string;
  publishedLabel: string;
  title: string;
  userLink?: string;
  id: string;
}

export const TextContent: FC<TextContentProps> = ({
  userName,
  publishedLabel,
  title,
  userLink,
  id,
}) => {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <UserName userlink={userLink} userName={userName} />
        <PublishedLabel publishedLabel={publishedLabel} />
      </div>
      <h2 className={styles.title}>
        <Link to={`/posts/${id}`} className={styles.postLink}>
          {title}
        </Link>
      </h2>
    </div>
  );
};
