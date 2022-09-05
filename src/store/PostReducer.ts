import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { AppStateType } from "./Store";

const SET_POST = "SET_POST";
const SET_MODALID = "SET_MODALID";

export const setBestPost = ({
  posts,
  afters,
}: {
  posts: [];
  afters: string;
}) => {
  return {
    type: SET_POST,
    posts,
    afters,
  };
};
export const setModalId = (id: string) => {
  return {
    type: SET_MODALID,
    id,
  };
};

const initionalState = {
  bestPost: [],
  modalId: "",
  afterPostPack: "",
};

const PostReducer = (
  state = initionalState,
  action: { [key: string]: string & [] }
) => {
  switch (action.type) {
    case SET_POST:
      return {
        ...state,
        bestPost: state.bestPost.concat(action.posts),
        afterPostPack: action.afters,
      };
    case SET_MODALID:
      return {
        ...state,
        modalId: action.id,
      };
    default:
      return state;
  }
};

export default PostReducer;

export const setPostThunk =
  (
    token: string,
    afterPost = ""
  ): ThunkAction<void, AppStateType, unknown, Action<string>> =>
  async (dispatch) => {
    try {
      const resp = await axios.get(`https://oauth.reddit.com/best`, {
        headers: { Authorization: `bearer ${token}` },
        params: {
          limit: 10,
          after: afterPost,
        },
      });
      const posts = await resp.data.data.children;
      const afters = await resp.data.data.after;
      dispatch(setBestPost({ posts, afters }));
    } catch (error) {
      console.log(error);
    }
  };
