import React from 'react';
import styles from './cardcontent.css';

export function CardContent(props) {

  return (
      <div className={styles.imgBody}>
        <img className={styles.img} src={props.imgPost} alt=""/>
      </div>

  );
}
