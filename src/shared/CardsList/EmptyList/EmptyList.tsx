import React from "react";
import style from "./EmptyList.css";

export const EmptyList = ({ text }: { text: "empty" | "404" }) => (
  <div className={style.emptyList}>
    <p className={style.title}>
      {text === "empty" && (
        <>
          <span>&#129488;</span>No posts
        </>
      )}
      {text === "404" && (
        <>
          <span>&#128070;</span>There&apos;s nothing here!
        </>
      )}
    </p>
  </div>
);
