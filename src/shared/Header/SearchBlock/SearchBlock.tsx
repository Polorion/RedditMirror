import React from "react";
import { useUserData } from "../../../utils/hooks/useUserData";
import styles from "./SearchBlock.css";
import { UserBlock } from "./UserBlock/UserBlock";

export const SearchBlock = () => {
  const { data, loading } = useUserData();

  return (
    <div className={styles.searchBlock}>
      <UserBlock
        avatarSrc={data.iconImg}
        username={data.name}
        loading={loading}
      />
    </div>
  );
};
