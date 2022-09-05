import {CLIENT_ID, CURRENT_URL, SECRET} from "../../../../config";

const SETTOKEN = "SETTOKEN";
const SETMODAL = "SETMODAL";
const SETUSERDATA = "SETUSERDATA";

const SetUserData = (data)=>{
  const parseData =JSON.parse(data)
console.log(parseData)
  return{
    type:SETUSERDATA,
    CURRENT_URL:parseData.CURRENT_URL,
    CLIENT_ID:parseData.CLIENT_ID,
    SECRET:parseData.SECRET,

  }
}

const setToken=(token)=>{
  return {
    type: SETTOKEN,
    token,
  };
}
export const setModal = (done) => {
  return {
    type: SETMODAL,
    done,
  };
};

const initionalState = {
  token: "",
  modalIsOpen: "false",
  CURRENT_URL:'',
  CLIENT_ID:'',
  SECRET:'',

};

const MainRecucer = (state = initionalState, action) => {
  switch (action.type) {
    case SETTOKEN:
      return {
        ...state,
        token: action.token,
      };
    case SETMODAL:
      return {
        ...state,
        modalIsOpen: action.done,
      };
      case SETUSERDATA:
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
export const setModalIsOpenOrClosed = (done) => (dispatch) => {
  dispatch(setModal(done));
};
export const setTokenActionCreater = () => (dispatch)=>{
  const token = localStorage.getItem('token') || window.__token__
  if(token.length > 15) {
    dispatch(setToken(token))
    localStorage.setItem('tokens', token)
  }

};
export const setUerDataAC = () => (dispatch)=>{
  const data =  window.__data__
    dispatch(SetUserData(data))
};