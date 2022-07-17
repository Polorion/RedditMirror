const SETPOST = "SETPOST";
const SETMODALID = "SETMODALID";

export const setBestPost = (post) => {
  return {
    type: SETPOST,
    post,
  };
};
export const setModalId = (id) => {
  return {
    type: SETMODALID,
    id,
  };
};

const initionalState = {
  bestPost: [],
  modalId: "",
};

const PostReduser = (state = initionalState, action) => {
  switch (action.type) {
    case SETPOST:
      return {
        ...state,
        bestPost: state.bestPost.concat(action.post),
      };
    case SETMODALID:
      return {
        ...state,
        modalId: action.id,
      };
    default:
      return state;
  }
};

export default PostReduser;

export const setPostThunk = (list) => (dispatch) => {
  dispatch(setBestPost(list));
};
export const setIdModal = (id) => (dispatch) => {
  dispatch(setModalId(id));
};
