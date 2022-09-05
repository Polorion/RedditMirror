import React, { useEffect, useRef, useState } from "react";
import { Card } from "./Card/Card";
import styles from "./CardsList.css";
import { EmptyList } from "./EmptyList/EmptyList";
import lostimg from "../../assets/img/lostimg.jpeg";
import { currentDate } from "../../utils/js/currentDate";
import { usePostData } from "../../utils/hooks/usePostsData";
import { FixedSizeList as List } from "react-window";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducer";

export const CardsList = () => {
  const [containerHeight, setContainerHeight] = useState(100);
  const [listHeight, setListHeight] = useState(containerHeight);
  const [cardHeight, setCardHeight] = useState(120);
  const { data, loading, loaded, loadHandler, fetchData, setLoaded } =
    usePostData();

  const ref = useRef<HTMLDivElement>(null);
  const token = useSelector<RootState>((store) => store.token);

  useEffect(() => {
    fetchData();
  }, [token]);
  useEffect(() => {
    if (window.innerWidth < 1024) setCardHeight(330);
  }, [listHeight, containerHeight, data]);
  useEffect(() => {
    setContainerHeight(window.innerHeight - 270);
  }, [containerHeight, data]);
  useEffect(() => {
    if (ref.current) setListHeight(ref.current?.getBoundingClientRect().height);
  }, [listHeight, containerHeight, data]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Row = (prop: any) => {
    const { data, index, style } = prop;
    return (
      <Card
        createDate={currentDate(data[index].created)}
        title={data[index].title}
        author={data[index].author}
        previewImg={
          data[index].thumbnail.startsWith("http")
            ? data[index].thumbnail
            : lostimg
        }
        cardId={data[index].id}
        userLink={data[index].url}
        karma={data[index].score}
        commentsCount={data[index].num_comments}
        style={style}
      />
    );
  };
  return (
    <div className={styles.cardsList}>
      {data.length > 0 ? (
        <List
          height={containerHeight}
          itemCount={data.length}
          itemSize={cardHeight}
          width={"100%"}
          itemData={data}
          innerRef={ref}
          onScroll={({ scrollOffset }) => {
            if (
              scrollOffset > listHeight - 1000 &&
              data.length > 0 &&
              !loading &&
              loaded < 2
            ) {
              fetchData();
              setLoaded(loaded + 1);
            }
          }}
        >
          {Row}
        </List>
      ) : !loading ? (
        <EmptyList text={"empty"} />
      ) : null}
      {loading && <div className={styles.loading}>loading...</div>}
      {!loading && loaded === 2 && (
        <div className={styles.btnLoadWrapp}>
          <button onClick={loadHandler} className={styles.loadMoreBtn}>
            Load more
          </button>
        </div>
      )}
    </div>
  );
};
