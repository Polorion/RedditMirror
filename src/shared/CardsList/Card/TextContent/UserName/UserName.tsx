import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./UserName.css";

interface UserNameProps {
  userlink?: string;
  userName: string;
}

export const UserName: FC<UserNameProps> = ({ userlink, userName }) => (
  <div className={styles.userLink}>
    <img
      className={styles.avatar}
      src="https://cdn-icons-png.flaticon.com/512/194/194938.png"
      alt="avatar"
    />
    <Link to={`${userlink}`} className={styles.username}>
      {userName}
    </Link>
  </div>
);
