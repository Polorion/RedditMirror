import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import MainReducer from "./MainReducer";
import thunk from "redux-thunk";
import PostReducer from "./PostReducer";

const redusers = combineReducers({
  MainPage: MainReducer,
  PostPage: PostReducer,
});

type RootReducerType = typeof redusers;
export type AppStateType = ReturnType<RootReducerType>;

const store = createStore(
  redusers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
