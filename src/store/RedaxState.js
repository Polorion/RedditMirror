import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import MainReducer from "./MainReducer";
import thunk from "redux-thunk";
import PostReduser from "./PostReduser";

const redusers = combineReducers({
  MainPage: MainReducer,
  PostPage: PostReduser,
});

const Store = createStore(
  redusers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default Store;

window.q = Store;
