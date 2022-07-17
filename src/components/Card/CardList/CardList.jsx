import React from "react";
import { Card } from "./Card/Card";
import styles from "./Cardlist.css";
import GeneratorRandomString from "../../../utils/GeneratorRandomString";

export function CardList(props) {
  return (
    <ul className={styles.cardsList}>
      {props.allPost.map((el) => (
        <Card
          id={el.data.id}
          avtor={el.data.author}
          imgPost={el.data.url}
          title={el.data.title}
          setIdModal={props.setIdModal}
          key={GeneratorRandomString()}
        />
      ))}
      {props.isFetching && <div>LOADIND....</div>}
      {props.errorLoading && <div>{props.errorLoading} </div>}
      <div ref={props.divLoader}></div>
      {props.count === 4 && (
        <button
          onClick={() => {
            props.setCount(0);
            props.setResetLoaading((prevState) => prevState + 1);
          }}
        >
          {" "}
          загрузить еще?
        </button>
      )}
    </ul>
  );
}
