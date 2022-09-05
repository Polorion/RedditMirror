import React from "react";
import styles from "./UpOrDown.css";
import dropdownIcon from "../../../../../../assets/img/svgIcons";

function UpOrDown(props) {
  const [count, setCount] = React.useState(props.like);

  function up() {
    setCount((prev) => prev + 1);
  }
  function down() {
    setCount((prev) => prev - 1);
  }

  return (
    <div className={styles.body}>
      <span onClick={up} className={styles.arrow_top}>
        {dropdownIcon.arrow}
      </span>
      <span className={styles.count}>{count}</span>
      <span onClick={down} className={styles.arrow_down}>
        {dropdownIcon.arrow}
      </span>
    </div>
  );
}

export default UpOrDown