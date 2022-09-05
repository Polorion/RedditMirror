import React from "react";

import styles from "./LoginAcc.module.css";
import headerIcons from "../../../../assets/img/headerIcons";

const LoginAc = (props) => {

  return (
    <a
      className={styles.login}
      href={`https://www.reddit.com/api/v1/authorize?client_id=${props.datas.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=${props.datas.CURRENT_URL}&scope=submit identity read`}>
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
