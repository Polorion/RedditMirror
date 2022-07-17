const SETTOKEN = "SETTOKEN";

export const setTokenActionCreater = (token) => {
  return {
    type: SETTOKEN,
    token,
  };
};

const initionalState = {
  token: "",
};

const MainRecucer = (state = initionalState, action) => {
  switch (action.type) {
    case SETTOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default MainRecucer;

export const tokenThunk = () => (dispatch) => {
  if (window.location.hash) {
    const url = new URL(window.location.href);
    const urlCode = url.hash.split("&").filter((el) => {
      if (el.substring(0, 1) === "#") {
        return true;
      }
    });
    const tokenCreat = urlCode[0].split("=").filter((el) => {
      if (el.substring(0, 1) !== "#") {
        return true;
      }
    });
    dispatch(setTokenActionCreater(String(tokenCreat)));
    localStorage.setItem("token", String(tokenCreat));
  }
};
