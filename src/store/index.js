import { createStore } from "redux";
import { mainReducer } from "../reducers";
// this file contains 2 thinngs:
// 11.the initial state of application
// 2. the configureStore execution

// 1.
export const initialState = {
  // devide properties into chunks/subobjects
  headerImg: {
    blur: false,
  },
  searchQuery: {
    query: "",
  },
};

// 2. - 3 arguments reduces, initial state
const configureStore = createStore(
  mainReducer,
  initialState,
  window &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default configureStore;

// implement job search:
// - jobdetails
// - company details/based jobs
// - jobListt
