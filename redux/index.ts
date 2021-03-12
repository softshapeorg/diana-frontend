import { applyMiddleware, createStore } from "redux";
import { MakeStore, createWrapper, Context } from "next-redux-wrapper";
import thunk from "redux-thunk";

import { State } from "../types";
import reducer from "./reducers";

const makeStore: MakeStore<State> = (context: Context) => {
  return createStore(reducer, applyMiddleware(thunk));
};

const wrapper = createWrapper<State>(makeStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
