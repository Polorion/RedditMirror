import React from "react";
import defaulImg from "../../../assets/img/login.png";
import styles from "./LoginAcc.module.css";
import Spiner from "../../UI/Spiner/Spiner";

interface ILoginAc {
  currentUrl: string;
  clientId: string;
  userIsActive: { [key: string]: string };
  userIsLoading: boolean;
}

const LoginAc = ({
  currentUrl,
  clientId,
  userIsActive,
  userIsLoading,
}: ILoginAc) => {
  return (
    <>
      {userIsLoading ? (
        <div className={styles.login}>
          <div className={styles.avatar}>
            <Spiner />
          </div>
          <div>Loading.......</div>
        </div>
      ) : (
        <a
          className={styles.login}
          href={`https://www.reddit.com/api/v1/authorize?client_id=${clientId}&response_type=code&state=random_string&redirect_uri=${currentUrl}&scope=submit identity read`}
        >
          <div className={styles.avatar}>
            {userIsActive.userImg ? (
              <img src={userIsActive.userImg} alt="" />
            ) : (
              <img src={defaulImg} alt="" />
            )}
          </div>
          <div className={styles.name}>
            {userIsActive.userName ? userIsActive.userName : "Login"}
          </div>
        </a>
      )}
    </>
  );
};

export default LoginAc;
