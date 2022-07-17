import React from "react";

import styles from "./LoginAcc.module.css";
import headerIcons from "../../../../assets/img/headerIcons";

const LoginAc = (props) => {
  return (
    <a
      className={styles.login}
      href="https://www.reddit.com/api/v1/authorize?client_id=hx92xEEQaGgrYebkV27fIg&response_type=token&state=random_string&redirect_uri=http://localhost:3000/auth&scope=submit identity read"
    >
      <div className={styles.avatar}>
        {props.data.img ? (
          <img src={props.data.img} alt="" />
        ) : (
          headerIcons.loginAcc
        )}
      </div>
      <div>{props.data.name}</div>
    </a>
  );
};

export default LoginAc;
