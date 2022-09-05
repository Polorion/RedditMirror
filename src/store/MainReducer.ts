import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { AppStateType } from "./Store";

const SET_TOKEN = "SET_TOKEN";
const SET_APP_DATA = "SET_APP_DATA";
const SET_USER_LOADING = "SET_USER_LOADING";
const SET_USER_DATA = "SET_USER_DATA";
const SET_USER_ACTIVE = "SET_USER_ACTIVE";

export const SetUserData = (data: string) => {
  const parseData = JSON.parse(data);
  return {
    type: SET_APP_DATA,
    CURRENT_URL: parseData.CURRENT_URL,
    CLIENT_ID: parseData.CLIENT_ID,
    SECRET: parseData.SECRET,
  };
};

export const setToken = (token: string) => {
  return {
    type: SET_TOKEN,
    token,
  };
};

export const setActive = (done: boolean) => {
  return {
    type: SET_USER_ACTIVE,
    done,
  };
};

export const setUserData = ({
  snoovatar_img,
  name,
}: {
  name?: string;
  snoovatar_img?: string;
}) => {
  return {
    type: SET_USER_DATA,
    img: snoovatar_img,
    name,
  };
};

export const setLoadingUser = (done: boolean) => {
  return {
    type: SET_USER_LOADING,
    done,
  };
};

const initionalState = {
  userIsActive: {
    userName: "",
    userImg: "",
  },
  active: false,
  modalIsOpen: false,
  userIsLoading: false,
  token: "",
  CURRENT_URL: "",
  CLIENT_ID: "",
  SECRET: "",
};

const MainRecucer = (
  state = initionalState,
  action: { [key: string]: string }
) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    case SET_USER_ACTIVE:
      return {
        ...state,
        active: action.done,
      };
    case SET_USER_DATA:
      return {
        ...state,
        userIsActive: {
          ...state.userIsActive,
          userName: action.name,
          userImg: action.img,
        },
      };
    case SET_USER_LOADING:
      return {
        ...state,
        userIsLoading: action.done,
      };
    case SET_APP_DATA:
      return {
        ...state,
        CURRENT_URL: action.CURRENT_URL,
        CLIENT_ID: action.CLIENT_ID,
        SECRET: action.SECRET,
      };
    default:
      return state;
  }
};

export default MainRecucer;

export const getUserThunk =
  (token: string): ThunkAction<void, AppStateType, unknown, Action<string>> =>
  (dispatch) => {
    dispatch(setLoadingUser(true));
    axios
      .get(`https://oauth.reddit.com/api/v1/me`, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((resp) => {
        console.log(resp);
        dispatch(setUserData(resp.data));
        dispatch(setLoadingUser(false));
        dispatch(setActive(true));
      })
      .catch((resp) => {
        dispatch(setLoadingUser(false));
        console.log(resp);
      });
  };
