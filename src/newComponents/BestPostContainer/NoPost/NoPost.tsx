import React from "react";
import img from "../../../assets/img/authorization.jpg";
import style from "./noPost.module.css";

const NoPost = () => {
  return (
    <div className={style.body}>
      <img src={img} alt="wolf" />
      <h3>please sign in</h3>
    </div>
  );
};

export default NoPost;
