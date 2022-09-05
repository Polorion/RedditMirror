import React, { FC } from "react";
import { KarmaCounter } from "../../../Controls/KarmaCounter/KarmaCounter";
import { PublishedLabel } from "../../PublishedLabel/PublishedLabel";
import { UserName } from "../../UserName/UserName";
import styles from "./PostHeader.css";
import { ThemesBlock } from "./ThemesBlock/ThemesBlock";

interface PostHeaderProps {
  title: string;
  karmaCounter: number;
  publishedLabel: string;
  userName: string;
  themesBlock: string;
}

export const PostHeader: FC<PostHeaderProps> = ({
  title,
  karmaCounter,
  publishedLabel,
  userName,
  themesBlock,
}) => (
  <div className={styles.header}>
    <KarmaCounter karma={karmaCounter} className={styles.karmaCounter} />
    <h3 className={styles.title}>
      <span>{title}</span>
      <div className={styles.subtitle}>
        <PublishedLabel publishedLabel={publishedLabel} />
        <UserName userlink="#" userName={userName} />
        <ThemesBlock text={themesBlock} />
      </div>
    </h3>
  </div>
);
