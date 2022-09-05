import { useFormik } from "formik";
import React, { FC, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateComment } from "../../../../../../store/comment/action";
import { RootState } from "../../../../../../store/reducer";
import styles from "./CommentForm.css";

interface CommentFormProps {
  focus?: boolean;
  userName: string;
}

export const CommentForm: FC<CommentFormProps> = ({ focus, userName = "" }) => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (focus) {
      ref.current?.focus();
      formik.setFieldValue(
        "comment",
        `${userName}, ${formik.values.comment}`,
        false
      );
    }
  }, [focus]);

  const handleBlur = () => {
    dispatch(updateComment(formik.values.comment));
  };

  const formik = useFormik({
    initialValues: {
      comment: useSelector<RootState, string>((state) => state.commentText),
    },
    onSubmit: (values) => {
      alert(values.comment);
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <textarea
        id="comment"
        name="comment"
        className={`${styles.input} ${
          formik.errors.comment ? styles.error : ""
        }`}
        value={formik.values.comment}
        onChange={formik.handleChange}
        onBlur={handleBlur}
        ref={ref}
      />
      {formik.touched.comment && formik.errors.comment ? (
        <span className={styles.errorLabel}>{formik.errors.comment}</span>
      ) : null}
      <button type="submit" className={styles.button}>
        Комментировать
      </button>
    </form>
  );
};
