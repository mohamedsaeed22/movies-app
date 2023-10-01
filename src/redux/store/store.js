import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { moviesReducer } from "../reducer/movieReducer";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(moviesReducer, applyMiddleware(thunk));
