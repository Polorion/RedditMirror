import React, { useEffect, useRef, useState } from "react";
import styles from "./ComentPostBody.module.css";
import { useForm } from "react-hook-form";
import PostImages from "/src/assets/img/postSvgIcons.jsx";
import { createEvent, createStore } from "effector";
import { useStore } from "effector-react";

const comentComent = createEvent();

const $coment = createStore("").on(comentComent, (state, newValue) => newValue);

interface IComentPostBody {
  name: string;
}

const ComentPostBody = (props: IComentPostBody) => {
  const value = useStore($coment);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data: {}) => alert(JSON.stringify(data));

  const [send, setSend] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current !== null) {
      ref.current.focus();
    }
  }, [send]);
  const changeValue = (e: any) => {
    comentComent(e.currentTarget);
  };

  return (
    <div className={styles.postBody}>
      <div className={styles.arrowBlock}>
        <div className={styles.arrow}>
          <div className={styles.arrowUp}>{PostImages.arrow}</div>
          <div className={styles.arrowDown}>{PostImages.arrow}</div>
        </div>
        <div className={styles.arrowLine}></div>
      </div>
      <div className={styles.modalInfo}>
        <div className={styles.modalHeader}>
          <img src="../src/new/src/assets/img/logo.png" alt="" />
          <p className={styles.modalName}>{props.name}</p>
          <p className={styles.modaTimeCreate}>1 час назад</p>
          <span className={styles.modalStatus}>Лига юристов</span>
        </div>
        <div className={styles.modalPost}>
          Сторонники тоталитаризма в науке будут объективно рассмотрены
          соответствующими инстанциями. Лишь реплицированные с зарубежных
          источников, современные исследования будут описаны подробно.
          максимально
        </div>
        <div className={styles.modalFotter}>
          <button
            onClick={() => {
              setSend(!send);
            }}
            className={styles.btn}
          >
            {PostImages.message}
            <span> Ответить</span>
          </button>
          <button className={styles.btn}>
            {PostImages.shared}
            <span>Поделиться</span>
          </button>
          <button className={styles.btn}>
            {PostImages.worning}
            <span>Пожаловаться</span>
          </button>
        </div>

        {send && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                {...register(`coment`)}
                className={styles.input}
                value={`${value}`}
                onInput={changeValue}
              />
            </div>

            <button className={styles.btnSend} type="submit">
              отправить
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ComentPostBody;
