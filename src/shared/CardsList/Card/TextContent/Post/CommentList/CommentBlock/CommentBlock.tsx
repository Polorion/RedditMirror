import React, { FC } from "react";
import { EIcons, Icon } from "../../../../../../../utils/ui/Icon/Icon";
import { PublishedLabel } from "../../../PublishedLabel/PublishedLabel";
import { UserName } from "../../../UserName/UserName";
import { ThemesBlock } from "../../PostHeader/ThemesBlock/ThemesBlock";
import styles from "./CommentBlock.css";

interface CommentBlockProps {
  answer?: React.ReactNode;
  onFocus?: () => void;
  userName: string;
  publishedLabel: string;
  themes: string;
  body: string;
}

const CommentBlock: FC<CommentBlockProps> = ({
  answer,
  onFocus,
  userName,
  publishedLabel,
  themes,
  body,
}) => (
  <div className={styles.commentBlock}>
    <div className={styles.header}>
      <UserName userlink="#" userName={userName} />
      <PublishedLabel publishedLabel={publishedLabel} />
      <div className={styles.themes}>
        <ThemesBlock text={themes} />
      </div>
    </div>
    <p className={styles.text}>{body}</p>
    <div className={styles.footer}>
      <button className={styles.button} onClick={() => onFocus?.()}>
        <Icon name={EIcons.comment} size={14} />
        Ответить
      </button>
      <button className={styles.button}>
        <Icon name={EIcons.share} size={14} />
        Поделиться
      </button>
      <button className={styles.button}>
        <Icon name={EIcons.complein} size={14} />
        Пожаловаться
      </button>
    </div>
    {answer}
  </div>
);

export default CommentBlock;
