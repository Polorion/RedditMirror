import React from "react";
import styles from "./Header.css";

import { Treadtitile } from "./Treadtitile";
import LoginAcc from "./LoginAccound/LogionAcc";
import { Searchblock } from "./Searchblock/Searchblock";
import { SortBlock } from "./SortBlock/SortBlock";

export function Header(props) {
  return (
    <header className={styles.header}>
      <Searchblock />
      <Treadtitile />
      <SortBlock />
      <LoginAcc data={props.data} />
    </header>
  );
}
