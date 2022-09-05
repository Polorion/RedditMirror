import React, { FC } from "react";
import { useModal } from "../../../../../utils/hooks/useModal";
import { GenericList } from "../../../../../utils/ui/GenericList/GenericList";
import { CommentList } from "./CommentList/CommentList";
import { genareteCommentList } from "./CommentList/GenareteCommentList/GenareteCommentList";
import { PostHeader } from "./PostHeader/PostHeader";
import styles from "./Post.css";
import { EIcons, Icon } from "../../../../../utils/ui/Icon/Icon";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/reducer";
import { useDispatch } from "react-redux";
import { updateFormFocus } from "../../../../../store/formFocus/action";
import { CommentForm } from "./CommentForm/CommentForm";
import { useNavigate } from "react-router-dom";

interface PostProps {
  onClose?: () => void;
  title: string;
  karma: number;
  publishedLabel: string;
  userName: string;
  themes: string;
  mainText: string;
  commentList: [];
  loading: boolean;
}

export const Post: FC<PostProps> = ({
  loading,
  title,
  karma,
  publishedLabel,
  userName,
  themes,
  mainText,
  commentList,
}) => {
  const isCommentFormFocus = useSelector<RootState, boolean>(
    (state) => state.isFormFocus
  );
  const focusUserName = useSelector<RootState, string>(
    (state) => state.focusCommentFormUserName
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ref] = useModal(() => {
    dispatch(updateFormFocus(false));
  });

  return (
    <div className={styles.post}>
      <div className={styles.container} ref={ref}>
        {!loading ? (
          <>
            <PostHeader
              title={title}
              karmaCounter={karma}
              publishedLabel={publishedLabel}
              userName={userName}
              themesBlock={themes}
            />
            <div className={styles.main}>{mainText}</div>

            <CommentForm focus={isCommentFormFocus} userName={focusUserName} />

            <CommentList>
              <GenericList list={genareteCommentList(commentList)} />
            </CommentList>

            <button
              className={styles.close}
              onClick={() => {
                navigate("/posts");
              }}
            >
              <Icon name={EIcons.cross} size={21} viewBox="0 0 21 21" />
            </button>
          </>
        ) : (
          <div className={styles.loading}>loading...</div>
        )}
      </div>
    </div>
  );
};
