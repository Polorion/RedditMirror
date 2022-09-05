import React, { FC } from "react";
import styles from "./Card.css";
import { Actions } from "./Controls/Actions/Actions";
import { Comments } from "./Controls/Comments/Comments";
import { Controls } from "./Controls/Controls";
import { KarmaCounter } from "./Controls/KarmaCounter/KarmaCounter";
import { Menu } from "./Menu/Menu";
import { Preview } from "./Preview/Preview";
import { SaveButton } from "./Controls/Actions/SaveButton/SaveButton";
import { ShareButton } from "./Controls/Actions/ShareButton/ShareButton";
import { TextContent } from "./TextContent/TextContent";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CardProps {
  title: string;
  previewImg: string;
  cardId: string;
  author: string;
  createDate: string;
  userLink?: string;
  karma: number;
  commentsCount: number;
  style?: object;
}

export const Card: FC<CardProps> = ({
  title,
  previewImg,
  cardId,
  author,
  createDate,
  userLink,
  karma,
  commentsCount,
  style,
}) => (
  <div className={styles.card} style={style}>
    <TextContent
      userName={author}
      publishedLabel={createDate}
      title={title}
      userLink={userLink}
      id={cardId}
    />

    <Preview imgSrc={previewImg} />

    <Menu cardId={cardId} />

    <Controls>
      <KarmaCounter karma={karma} />
      <Comments commentsCount={commentsCount} />

      <Actions>
        <ShareButton />
        <SaveButton />
      </Actions>
    </Controls>
  </div>
);
