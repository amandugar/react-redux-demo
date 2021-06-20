import { createStore } from "redux";
import cakeReducer from "./cake/cakeReduxer";

const store = createStore(cakeReducer);

export default store;
