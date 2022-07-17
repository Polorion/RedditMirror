import React from "react";
import styles from "./ComentPost.css";
import ComentPostBody from "./ComentPostBody/ComentPostBody";

const ComentPost = () => {
  return (
    <div className={styles.modalBody}>
      <ComentPostBody name={"Михаил Рогов"} />
    </div>
  );
};

export default ComentPost;
