import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Icon, EIcons } from "../../../../utils/ui/Icon/Icon";
import styles from "./UserBlock.css";

interface UserBlockProps {
  avatarSrc?: string;
  username?: string;
  loading?: boolean;
}

export const UserBlock: FC<UserBlockProps> = ({
  avatarSrc,
  username,
  loading,
}) => (
  <Link to="login" className={styles.userBox}>
    <div className={styles.avatarBox}>
      {avatarSrc ? (
        <img src={avatarSrc} alt="user-avatar" className={styles.avatarImage} />
      ) : (
        <Icon name={EIcons.user} size={50} viewBox="0 0 50 50" />
      )}
    </div>

    <span className={styles.username}>
      {loading ? "loading..." : username || "Stranger"}
    </span>
  </Link>
);
